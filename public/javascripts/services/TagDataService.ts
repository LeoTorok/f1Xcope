/// <reference path="../references.ts" />

/// <amd-dependency path="../objects/TagObjects"/>

export class TagDataService implements ITagDataService
{
    tagDataService = {};
    allTags : TagObjects.TagObject[] = [];
    _$http : any = {};
    _$scope = {};

    static $inject = ['$scope', '$http'];
    constructor($scope, $http)
    {
        this._$http = $http;
        this._$scope = $scope;

        $scope.vm = this;
    }

    addNewTag(newTag: TagObjects.TagObject){
        this._$http.post('/tag.json', newTag).success(function(data) {
            if (data.todo) {
                this._$scope.tags.push(data.todo);
                this._$scope.newTag.name = '';
            } else {
                alert(JSON.stringify(data));
            }
        }).error(function(err,a,b,c){
                console.log('error saving tag ' + err + ',' + a + ',' + b + ',' + c);
                //alert(err);
            });
    }

    deleteSelectedTag(tag: TagObjects.TagObject){
        alert ('deleteSelectedTag');
    }
};

