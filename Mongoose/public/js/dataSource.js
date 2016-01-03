/**
 * Created by oscar on 4/09/15.
 */
var app =angular.module("app", []);
    app.controller("MyController", function($scope, getData) {
        $scope.products = getData.retrieve()
            .success(function(data) {
               $scope.products = data;
            });

        $scope.currentProduct = function (id) {
            $scope.current_product = $scope.products[id];
        }
    });

    app.service("getData", ["$http", function($http) {
        var self = this;

        self.retrieve = function () {
            return $http.get("http://localhost:3000/catalog")
        }

    }]);
