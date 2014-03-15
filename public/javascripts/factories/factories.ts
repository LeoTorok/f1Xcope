/// <reference path="../references.ts" />

/// <amd-dependency path="angular"/>

define(['angular', 'factories/socketIOFactory'], function (angular, siof : ISocketIOFactory)
{
    angular.module('factories', []).factory("socketIOFactory", <any>siof);
});
