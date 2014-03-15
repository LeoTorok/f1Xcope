/// <reference path="../references.ts" />
var Controllers;
(function (Controllers) {
    var TagListController = (function () {
        function TagListController($scope, http) {
            this.allTags = [];
            this.newTag = new TagObject('newTag', 'english');
            this.message = 'some message';
            $scope.vm = this;
        }
        TagListController.prototype.addNewTag = function (tagName, tagLanguage) {
            console.log('tagName' + tagName);
        };

        TagListController.prototype.setTags = function (tags) {
            this.allTags = tags;
        };
        TagListController.$inject = ['$scope', '$http'];
        return TagListController;
    })();
    Controllers.TagListController = TagListController;
})(Controllers || (Controllers = {}));
/// <reference path="../references.ts" />
//import angular = require('angular');
//import TagListCtrl = require('TagListController');
define(['angular'], function (angular) {
    angular.module('controllers', []);
    //.controller(Controllers);
});
/**
 * Created by leo on 14/11/2013.
 */
/// <reference path="../references.ts" />
var Mongoose = require('mongoose');

exports.TagSchema = new Mongoose.Schema({
    name: { type: String, required: true },
    language: { type: String, required: true }
});

var TagObject = (function () {
    function TagObject(name, language) {
        this.name = name;
        this.language = language;
    }
    return TagObject;
})();
;
/**
 * Created by leo on 13/11/2013.
 */
/// <reference path="../../def/angular.d.ts" />
/// <reference path="../../def/require.d.ts" />
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'javascripts/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        angular: 'angular/angular'
    }
});

require(['angular'], function (angular) {
    //import tagc = require('controllers/controllers');
    angular.module('TodoModule', ['controllers', 'ui.bootstrap']);
});
//# sourceMappingURL=requirejs_entry.map
