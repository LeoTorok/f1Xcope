/// <reference path="../references.ts" />
define(["require", "exports", "../objects/TagObjects"], function(require, exports) {
    /// <amd-dependency path="../objects/TagObjects"/>
    var TagDataService = (function () {
        function TagDataService($scope, $http) {
            this.tagDataService = {};
            this.allTags = [];
            this._$http = {};
            this._$scope = {};
            this._$http = $http;
            this._$scope = $scope;

            $scope.vm = this;
        }
        TagDataService.prototype.addNewTag = function (newTag) {
            this._$http.post('/tag.json', newTag).success(function (data) {
                if (data.todo) {
                    this._$scope.tags.push(data.todo);
                    this._$scope.newTag.name = '';
                } else {
                    alert(JSON.stringify(data));
                }
            }).error(function (err, a, b, c) {
                console.log('error saving tag ' + err + ',' + a + ',' + b + ',' + c);
                //alert(err);
            });
        };

        TagDataService.prototype.deleteSelectedTag = function (tag) {
            alert('deleteSelectedTag');
        };
        TagDataService.$inject = ['$scope', '$http'];
        return TagDataService;
    })();
    exports.TagDataService = TagDataService;
    ;
});
//# sourceMappingURL=TagDataService.js.map
