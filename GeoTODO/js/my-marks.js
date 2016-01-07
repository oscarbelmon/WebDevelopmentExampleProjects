var app = angular.module("demoapp", ['leaflet-directive']);

var selected = {
    type: "awesomeMarker",
    icon: "tag",
    markerColor: "red",
}

app.controller("TheController", [ "$scope", "$http", "leafletEvents", function($scope, $http, leafletEvents) {
    angular.extend($scope, {
        london: {
            lat: 51.505,
            lng: -0.09,
            zoom: 8
        },
        castellon: {
            lat: 39.98685368305097,
            lng: -0.04566192626953125,
            zoom: 14
        },
        events: {
        }
    });

    $scope.markers = new Array();
    $scope.currentMarker = {};
    $scope.$on("leafletDirectiveMap.click", function(event, args) {
        addMarker(args.leafletEvent);
    });

    $scope.showInfo = function(index){
        updateCurrentMarker($scope.markers[index]);
    };

    $scope.removeMark = function (index) {
        if($scope.markers[index] === $scope.currentMarker) {
            $scope.currentMarker = {};
            $scope.currentMarker.focus = false;
        }
        $scope.markers.splice(index, 1);
    }

    $scope.$on("leafletDirectiveMarker.click", function(event, args) {
        updateCurrentMarker($scope.markers[args.modelName]);
    });

    // I shall move these to a factory
    function addMarker(data) {
        var urlString = "http://nominatim.openstreetmap.org/reverse?format=json&lat=" +
            data.latlng.lat + "&lon=" + data.latlng.lng + "&zoom=18&addressdetails=1";
        $http.get(urlString).then(reverseGeocoding);
    }

    function updateCurrentMarker(currentMarker) {
        $scope.currentMarker.focus = false;
        $scope.currentMarker.icon = {};
        $scope.currentMarker = currentMarker;
        $scope.currentMarker.icon = selected;
        $scope.currentMarker.focus = true;
    }

    function reverseGeocoding(response) {
        var _dueDate = new Date();
        _dueDate.setSeconds(0);
        _dueDate.setMilliseconds(0);
        var marker = {
            lat: parseFloat(response.data.lat),
            lng: parseFloat(response.data.lon),
            message: "New message",
            dueDate: _dueDate,
            display_name: response.data.display_name
        };
        updateCurrentMarker(marker);
        $scope.markers.push(marker);
    }
}]);
