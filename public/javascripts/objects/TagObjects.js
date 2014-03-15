/**
* Created by leo on 14/11/2013.
*/
/// <reference path="../references.ts" />
var TagObjects;
(function (TagObjects) {
    var LanguageObject = (function () {
        function LanguageObject(code, name, englishName) {
            this.code = code;
            this.name = name;
            this.englishName = englishName;
        }
        return LanguageObject;
    })();
    TagObjects.LanguageObject = LanguageObject;
    ;

    var TagObject = (function () {
        function TagObject(name, languages) {
            this.name = name;
            this.languages = languages;
            this.selected = false;
        }
        return TagObject;
    })();
    TagObjects.TagObject = TagObject;
})(TagObjects || (TagObjects = {}));
;
//# sourceMappingURL=TagObjects.js.map
