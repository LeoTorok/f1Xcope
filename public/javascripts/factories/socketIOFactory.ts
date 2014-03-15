/// <reference path="../references.ts" />
/// <reference path="../../def/socket.io.client.d.ts" />

/// <amd-dependency path="socketio"/>

export class socketIOFactory implements ISocketIOFactory
{
    _$http : any = {};
    _$scope = {};
    _$io : any = {};

    static $inject = ['$scope', '$http'];
    constructor($scope, $http)
    {
        this._$http = $http;
        this._$scope = $scope;
        this._$io = require('socketio');

        $scope.vm = this;
    }

    connect(host : string, port : number) : string{
        return host + ":" + port;
    }
};

