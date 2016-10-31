(function() {
    angular.module("root", ["service"])
        .controller("index", ["$scope", "message", function ($scope, message) {
            $scope.messageFromService = message;
        }])
}());