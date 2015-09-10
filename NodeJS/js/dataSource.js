/**
 * Created by oscar on 4/09/15.
 */
var app =angular.module("app", []);
    app.controller("MyController", function($scope, getData) {
        $scope.people = getData.retrieve()
            .success(function(data) {
               $scope.people = data;
            });
        //getData();
        //$scope.people = [
        //    {
        //        name:"Oscar",
        //        surname:"Belmonte"
        //    },
        //    {
        //        name:"María del Carmen",
        //        surname:"Erdozain"
        //    },
        //    {
        //        name:"Martín",
        //        surname:"Belmonte"
        //    },
        //    {
        //        name:"Gonzalo",
        //        surname:"Belmonte"
        //    }
        //];


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
