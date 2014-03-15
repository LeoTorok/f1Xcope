/**
 * Created by leo on 14/11/2013.
 */

/// <reference path="../references.ts" />

module TagObjects
{
    export class LanguageObject {
        code : string;
        name : string;
        englishName: string;
        constructor(code: string, name : string, englishName : string){
            this.code = code;
            this.name = name;
            this.englishName = englishName;
        }
    };


    export class TagObject {
        name : string;
        languages: LanguageObject[];
        _id : any;
        selected: boolean;

        constructor(name : string, languages : LanguageObject[]){
            this.name = name;
            this.languages = languages;
            this.selected = false;
        }
    }
};
