var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var CurrentUser = require('../User/UserModel');
var ExperimentSchema = new Schema({
    name: String,
    manager_id:{
        type:Schema.Types.ObjectId,
        ref:'manager'
    },
    template_id:{
        type:Schema.Types.ObjectId,
        ref:'template'
    },
    user_ids:[{
        type:Schema.Types.ObjectId,
        ref:'user'
    }],    
    last_pos: Number,
});

//manager: 5c89a10b67bf8f3aac54aea4
//template: 5c89a19567bf8f3aac54aea5
module.exports = mongoose.model('experiment',ExperimentSchema);