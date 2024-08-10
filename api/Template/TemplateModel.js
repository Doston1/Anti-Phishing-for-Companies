var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TemplateSchema = new Schema({
    img_url:String,
    html_url:String,
    title:String, 
    template_text:String,
    url_email_main:String,

});

module.exports = mongoose.model('template',TemplateSchema);