/**
 * Created by oscar on 7/1/16.
 */
var app = angular.module("app", ["leaflet-directive"]);

app.controller("TheController", ["$scope", function($scope) {
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

    $scope.markers = new Array();

    $scope.$on("leafletDirectiveMap.click", function (event,args) {
      console.log("click");
      var latlng = args.leafletEvent.latlng;

      $scope.markers = [{
          lat: latlng.lat,
          lng: latlng.lng,
          message: "Hello",
          icon: {
            // iconUrl: 'node_modules/leaflet/dist/images/marker-icon.png',
            // shadowUrl: 'node_modules/leaflet/dist/images/marker-shadow.png',
            // iconAnchor: [14, 14]
          }
        }]
    });
}]);
