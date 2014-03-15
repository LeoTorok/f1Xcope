var Mongoose = require('mongoose');


exports.LanguageSchema = new Mongoose.Schema({
    code : {type: String, required : true },
    name : {type : String, required : true},
    englishName : {type : String, required : true}
});


exports.TagSchema = new Mongoose.Schema({
    name : { type : String, required : true },
    languages : [exports.LanguageSchema]
 });