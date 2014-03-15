/**
 * Created by leo on 15/11/2013.
 */
/// <reference path="../references.ts" />


/// <amd-dependency path="angular"/>

define(['angular', 'directives/TagDetail'], function (angular, tagDetail)
{
    angular.module('directives', []).directive(tagDetail);
});

