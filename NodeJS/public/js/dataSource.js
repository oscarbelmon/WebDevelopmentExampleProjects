/**
 * Created by oscar on 4/09/15.
 */
var app =angular.module("app", []);
    app.controller("MyController", function($scope, getData) {
        $scope.people = getData.retrieve()
            .success(function(data) {
               $scope.people = data;
            });

        $scope.currentPerson = function (index) {
            $scope.current_person = $scope.people[index];
        }
    });

    app.service("getData", ["$http", function($http) {
        var self = this;

        self.retrieve = function () {
            return $http.get("http://localhost:3000")
        }

    }]);
