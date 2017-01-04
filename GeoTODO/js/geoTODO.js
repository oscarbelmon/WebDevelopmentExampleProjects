/**
 * Created by oscar on 7/1/16.
 */
var app = angular.module("app", ["leaflet-directive"]);

app.controller("TheController", [
    "$scope",
    "$http",
    function($scope, $http) {
        angular.extend($scope, {
            tiles: {
                url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                options: {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            },
            castellon: {
                lat: 39.98685368305097,
                lng: -0.04566192626953125,
                zoom: 14
            },
            events: {}
        });

        $scope.markers = new Array;
        var currentMarker = {};

        $scope.$on("leafletDirectiveMap.mousedown", function(event, args) {
            var mouseButton = args.leafletEvent.originalEvent.button;

            if (mouseButton == 2) { // Right button
                var latlng = args.leafletEvent.latlng;
                reverseGeocoding(latlng);
            }
        });

        function reverseGeocoding(latlng) {
            var urlString = "http://nominatim.openstreetmap.org/reverse?format=json&lat=" + latlng.lat + "&lon=" + latlng.lng + "&zoom=18&addressdetails=1";
            $http.get(urlString)
                .then(addMarker);
        }

        function addMarker(response) {
            var marker = {lat: parseFloat(response.data.lat),
                lng: parseFloat(response.data.lon),
                message: "Hello", dueDate: new Date(),
                postalAddress: response.data.display_name
            };
            $scope.markers.push(marker);
            currentMarker = marker;
        }

        $scope.showInfo = function(index) {
            currentMarker = $scope.markers[index];
        }

        $scope.updateCurrentMarker = function(indexCurrentMarker) {
            currentMarker.focus = false;
            currentMarker = $scope.markers[indexCurrentMarker];
            currentMarker.focus = true;
        }

        $scope.removeMark = function (index) {
            if($scope.markers[index] === currentMarker) {
                currentMarker = {};
                currentMarker.focus = false;
            }
            $scope.markers.splice(index, 1);
        }
    }
]);
