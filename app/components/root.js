(function() {
    angular.module("root", ["services"])
        .config(["messageProvider", function (messageProvider) {
            messageProvider.setText("Hello world!");
        }])
        .controller("index", ["$scope", "message", function ($scope, message) {
            $scope.message = message.text;
        }])
}());