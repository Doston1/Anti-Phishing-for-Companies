var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ManagerSchema = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    current: String,
    modified: String,
});

module.exports = mongoose.model('manager',ManagerSchema);