/// <reference path="../../references.ts" />


interface ITagDataService
{
    addNewTag(tag: TagObjects.TagObject) : void;
    deleteSelectedTag(tag: TagObjects.TagObject) : void;
}