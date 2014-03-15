require.config({
    paths: {
        angular: 'vendor/angular/angular',
        mongoose: '../../node_modules/',
        socketio: 'vendor/socket.io-client/dist/socket.io'
    },
    baseUrl: 'javascripts/',
    shim: {
        'angular' : {'exports' : 'angular'},
        'socketio': { exports: 'io'}
    },
    priority: [
        "angular"
    ]
});

require( [
    'angular',
    'main'
], function(angular, app, routes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        $html.addClass('ng-app');
        angular.bootstrap($html, [app['name']]);
    });
});
