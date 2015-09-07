/**
 * Created by oscar on 25/07/15.
 */
angular.module("firstModule", [])
.controller("MyController", function($scope) {
        var self = this;
        self.you = "Óscar";
        self.date = function () {
            return new Date();
        }
        self.data = [
            {
                "name": "Óscar",
                "surname": "Belmonte"
            },
            {
                "name": "María del Carmen",
                "surname": "Erdozain"
            },
            {
                "name": "Martín",
                "surname": "Belmonte"
            },
            {
                "name": "Gonzalo",
                "surname": "Belmonte"
            }
        ];
});