/// <reference path="../references.ts" />

/// <amd-dependency path="angular"/>

/// <amd-dependency path="../objects/TagObjects"/>


export class tagDetail
{
    constructor() {
        return  {
            link: function ($scope, $element, $attrs){
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
}

