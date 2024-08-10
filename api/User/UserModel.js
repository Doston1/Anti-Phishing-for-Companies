var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    manager_id:{
        type:Schema.Types.ObjectId,
        ref:'manager'
    },
    to_email:String,
    is_fished:Boolean,
    template_id:{
        type:Schema.Types.ObjectId,
        ref:'template'
    },
});
//template: 5c7f6ea9d1e90f175c97db32
//user:5c7f75f4f68dbb2458d69182
module.exports = mongoose.model('user',UserSchema);