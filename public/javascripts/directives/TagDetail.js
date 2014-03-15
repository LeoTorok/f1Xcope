/// <reference path="../references.ts" />
define(["require", "exports", "angular", "../objects/TagObjects"], function(require, exports) {
    /// <amd-dependency path="angular"/>
    /// <amd-dependency path="../objects/TagObjects"/>
    var tagDetail = (function () {
        function tagDetail() {
            return {
                link: function ($scope, $element, $attrs) {
                    $scope.$watch($attrs.name, function (newValue, oldValue) {
                        console.log(newValue);
                        $scope.tagName = newValue;
                    });
                    $scope.$watch($attrs.code, function (newValue, oldValue) {
                        console.log(newValue);
                        $scope.tagCode = newValue;
                    });
                },
                templateUrl: '/assets/partials/tagDetail.html'
            };
        }
        return tagDetail;
    })();
    exports.tagDetail = tagDetail;
});
//# sourceMappingURL=TagDetail.js.map
