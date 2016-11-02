(function() {
    angular.module("root", ["services"])
        .constant("constantText", "Hello constant!")
        .config(["messageProvider", "constantText", function (messageProvider, constantText) {
            messageProvider.setText(constantText);
        }])
        .controller("index", ["$scope", "message", function ($scope, message) {
            $scope.message = message.text;
        }])
}());