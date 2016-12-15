/**
 * Created by oscar on 7/1/16.
 */
var app = angular.module("app", ["leaflet-directive"]);

app.controller("TheController", ["$scope", function($scope) {
    angular.extend($scope, {
      castellon: {
          lat: 39.98685368305097,
          lng: -0.04566192626953125,
          zoom: 14
      },
      tiles: {
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
           options: {
               attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             }
      }
    })
}]);
