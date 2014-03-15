/// <reference path="../references.ts" />
/// <amd-dependency path="angular"/>
define(['angular', 'factories/socketIOFactory'], function (angular, siof) {
    angular.module('factories', []).factory("socketIOFactory", siof);
});
//# sourceMappingURL=factories.js.map
