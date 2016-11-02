(function () {
    angular.module("services", [])
        .value("factor", "6")
        .provider("message", [function () {
            var text = null;
            
            this.setText = function (textString) {
                text = textString;
            };
            
            this.$get = [function () {
                return new Message(text); 
            }];
        }]);
})();