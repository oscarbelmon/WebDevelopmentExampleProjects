/**
 * Created by oscar on 26/1/16.
 */
angular.module("temperatures", [])
    .controller("TemperaturesController", ["$scope", function($scope) {
        $scope.fahrenheit = 32.0;
        $scope.reamur = 0;

        function celsiusFahrenheit(celsius) {
            return celsius * 9.0 / 5.0 + 32.0;
        }

        function celsiusReamur(celsius) {
            return celsius * 4.0 / 5.0;
        }

        $scope.calculus = function() {
            $scope.fahrenheit = celsiusFahrenheit($scope.celsius);
            $scope.reamur = celsiusReamur($scope.celsius);
        }
    }]);