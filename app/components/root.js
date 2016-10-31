(function() {
    angular.module("root", ["services"])
        .controller("index", ["$scope", "square", function ($scope, square) {
            $scope.product = square;
        }])
}());