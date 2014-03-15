/// <reference path="../references.ts" />
/// <reference path="../../def/socket.io.client.d.ts" />
define(["require", "exports", "socketio"], function(require, exports) {
    /// <amd-dependency path="socketio"/>
    var socketIOFactory = (function () {
        function socketIOFactory($scope, $http) {
            this._$http = {};
            this._$scope = {};
            this._$io = {};
            this._$http = $http;
            this._$scope = $scope;
            this._$io = require('socketio');

            $scope.vm = this;
        }
        socketIOFactory.prototype.connect = function (host, port) {
            return host + ":" + port;
        };
        socketIOFactory.$inject = ['$scope', '$http'];
        return socketIOFactory;
    })();
    exports.socketIOFactory = socketIOFactory;
    ;
});
//# sourceMappingURL=socketIOFactory.js.map
