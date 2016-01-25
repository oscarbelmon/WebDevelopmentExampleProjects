var app = angular.module("demoapp", ['leaflet-directive']);

var selected = {
    type: "awesomeMarker",
    icon: "tag",
    markerColor: "red",
}

app.controller("TheController", [ "$scope", "$http", function($scope, $http) {
    angular.extend($scope, {
        castellon: {
            lat: 39.98685368305097,
            lng: -0.04566192626953125,
            zoom: 14
        },
        events: {}
    });

    $scope.markers = new Array();
    $scope.currentMarker = {};
    $scope.$on("leafletDirectiveMap.mousedown", function(event, args) {
        var mouseButton = args.leafletEvent.originalEvent.button;
        if(mouseButton == 2) { // Right button
            addMarker(args.leafletEvent);
        }
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
            data.latlng.lat + "&lon=" +
            data.latlng.lng + "&zoom=18&addressdetails=1";
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
            message: "Remember this....",
            dueDate: _dueDate,
            display_name: response.data.display_name
        };
        $scope.markers.push(marker);
        updateCurrentMarker(marker);
    }
}]);
