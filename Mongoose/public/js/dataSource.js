var app =angular.module("app", []);
    app.controller("MyController", function($scope, getData) {
        $scope.products = getData.retrieve(function(response) {
            $scope.products = response.data;
        }, function(error) {
            console.log(error);
        });

        $scope.currentProduct = function (id) {
            $scope.current_product = $scope.products[id];
        }
    });

    app.service("getData", ["$http", function($http) {
        var self = this;

        self.retrieve = function (success, error) {
            return $http.get("http://localhost:3000/catalog")
                .then(success, error);
        }

    }]);
