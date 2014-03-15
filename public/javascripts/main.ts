/**
 * Created by leo on 13/11/2013.
 */

/// <reference path="../../def/angular.d.ts" />
/// <reference path="../../def/require.d.ts" />

/// <amd-dependency path="angular"/>


//var angular = require("angular");
define(['angular', 'controllers/controllers', 'services/services', 'directives/directives'],
        function (angular, controllers)
{
    return angular.module('tl4', ['controllers', 'services', 'directives']);
});
