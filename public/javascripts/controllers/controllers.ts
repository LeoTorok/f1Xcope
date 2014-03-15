/// <reference path="../references.ts" />

/// <amd-dependency path="angular"/>

define(['angular', 'services/services',
    'controllers/mainIndexController',
    'factories/factories',
    'factories/socketIOFactory'],
    function (angular, srv, mainIndexController, fact, siof)
{
    angular.module('controllers', ['services', 'factories'])
        .controller(mainIndexController);
        //.controller(w9ctrl);
});

