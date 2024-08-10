var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    email:String,
    name: String,
    password:String 
});

module.exports = mongoose.model('admin',AdminSchema);