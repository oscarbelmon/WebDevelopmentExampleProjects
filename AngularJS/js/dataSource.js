/**
 * Created by oscar on 4/09/15.
 */
angular.module("app", [])
    .controller("MyController", function($scope) {
        $scope.people = [
            {
                name:"Oscar",
                surname:"Belmonte"
            },
            {
                name:"María del Carmen",
                surname:"Erdozain"
            },
            {
                name:"Martín",
                surname:"Belmonte"
            },
            {
                name:"Gonzalo",
                surname:"Belmonte"
            }
        ];

        $scope.currentPerson = function (index) {
            $scope.current_person = $scope.people[index];
        }
    });
