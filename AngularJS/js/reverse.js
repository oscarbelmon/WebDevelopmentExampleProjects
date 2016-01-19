/**
 * Created by oscar on 19/1/16.
 */
angular.module("app", [])
    .controller("MyController", function($scope) {
        $scope.reversed = "";

        $scope.reverse = function(s) {
            $scope.reversed = s.split("").reverse().join("");
        };
    });

