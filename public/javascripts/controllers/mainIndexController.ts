/// <reference path="../references.ts" />

/// <amd-dependency path="factories/socketIOFactory"/>

export class mainIndexController
{
    _$http : any = {};
    _$scope = {};
    _$siof : ISocketIOFactory = null;
    _socket : any = null;

    tbr = {
        text : 'your text here',
        result: 'click button'
    }

    conn = {
        user: 'salvo.leopoldo@gmail.com',
        host: '127.0.0.1',
        port: 8888,
        result: ''
    }

    static $inject = ['$scope', '$http'];
    constructor($scope, $http)
    {
        this._$http = $http;
        this._$scope = $scope;
        this._$siof = <ISocketIOFactory>new (require('factories/socketIOFactory')).socketIOFactory($scope, $http);

        $scope.vm = this;
    }

    connect_socketIO = function(){
        var result : string = this._$siof.connect(this._$scope.vm.conn.host, this._$scope.vm.conn.port);
        this._$scope.vm.conn.result = result;
    }

    reverse_text = function()
    {
        var $scope = this._$scope;

        $scope.vm.tbr.result = $scope.vm.tbr.text.split('').reverse().join('');
        /*this._$http.post('/week9/suffix_tree_construction_problem.json', this.stcp).success(function(data) {
            $scope.vm.stcp.result = data.result;
        });*/
    };
}

