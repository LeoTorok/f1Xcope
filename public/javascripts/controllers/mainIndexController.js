/// <reference path="../references.ts" />
define(["require", "exports", "factories/socketIOFactory"], function(require, exports) {
    /// <amd-dependency path="factories/socketIOFactory"/>
    var mainIndexController = (function () {
        function mainIndexController($scope, $http) {
            this._$http = {};
            this._$scope = {};
            this._$siof = null;
            this._socket = null;
            this.tbr = {
                text: 'your text here',
                result: 'click button'
            };
            this.conn = {
                user: 'salvo.leopoldo@gmail.com',
                host: '127.0.0.1',
                port: 8888,
                result: ''
            };
            this.connect_socketIO = function () {
                var result = this._$siof.connect(this._$scope.vm.conn.host, this._$scope.vm.conn.port);
                this._$scope.vm.conn.result = result;
            };
            this.reverse_text = function () {
                var $scope = this._$scope;

                $scope.vm.tbr.result = $scope.vm.tbr.text.split('').reverse().join('');
                /*this._$http.post('/week9/suffix_tree_construction_problem.json', this.stcp).success(function(data) {
                $scope.vm.stcp.result = data.result;
                });*/
            };
            this._$http = $http;
            this._$scope = $scope;
            this._$siof = new (require('factories/socketIOFactory')).socketIOFactory($scope, $http);

            $scope.vm = this;
        }
        mainIndexController.$inject = ['$scope', '$http'];
        return mainIndexController;
    })();
    exports.mainIndexController = mainIndexController;
});
//# sourceMappingURL=mainIndexController.js.map
