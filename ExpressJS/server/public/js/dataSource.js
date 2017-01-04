var app =angular.module("app", []);

app.controller("MyController", ["$scope", "getData", function($scope, getData) {
    $scope.people = getData.retrieve(function(response) {
        $scope.people = response.data;
    }, function(response) {
        console.log(error);
    });

    $scope.currentPerson = function (index) {
        $scope.current_person = $scope.people[index];
    }
}]);

app.service("getData", ["$http", function($http) {
    var self = this;

    self.retrieve = function(succes, error) {
        return $http.get("http://localhost:3000")
            .then(succes, error);
    }

}]);
