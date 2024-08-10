var CurrentUser = require('./UserModel');
var User = require('./UserModel');
var CurrentManager = require('../Manager/ManagerModel');


exports.test = function(req, res, next){
    res.json({firstmessage:"hello world"});
};


exports.getall = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentUser.find( {} ).populate('manager_id').populate('template_id').then(function(data){

                res.json(data)
            },
            function(err){
                next(err);
            }
            );
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
};
/*
exports.getmail = function(req, res, next, id1){
    CurrentUser.findOne({_id:id1}).then(function(data){
        if(data) //if it does
        {
            return data.to_email;

        }
        else if(!data) // if it does not 
        {
            return "couldn't find it";
        }
    });
};
*/
exports.insert = function(req, res, next){
    console.log(req.body);
    var manager_id = req.body.manager_id;
    var to_email = req.body.to_email;
    var is_fished = false;
    var template_id = req.body.template_id;
    var p1 = {manager_id: manager_id, to_email: to_email, is_fished: is_fished, template_id: template_id};
    var newItem = new CurrentUser(p1);
    newItem.save(function(err, item){
        if(err){
            next(err);
        }
        res.json({user:item});
     });//end of save
};

/*
exports.insertMany = function(req, res, next){
    var arr1 = new Array();
    var i = 0;
    var p1, newItem, to_email;
    console.log(req.body);
    var manager_id = req.body.manager_id;
    var template_id = req.body.template_id;
    var is_fished = false;
    arr1 = req.body.to_email;
    for(i =0; i<arr1.length;i++)
    {
        p1 = {manager_id: manager_id, to_email: arr1[i], is_fished: is_fished, template_id: template_id};
        newItem = new CurrentUser(p1);
        newItem.save(function(err, item){
            if(err){
                next(err);
            }
           
         });//end of save
    }//end of for
    res.json({success:true});

}; 
*/

exports.delete = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentUser.remove({_id:req.body.id}).then(function(){
            res.send("deleted " + req.body.id);
            }, function(err){
                next(err);
                }
            );
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
} ;

exports.update = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentUser.findOne({_id:req.body.id}).then(function(data){
                data.manager_id = req.body.manager_id;;
                data.to_email = req.body.to_email;
                data.is_fished = req.body.is_fished;        
                data.template_id = req.body.template_id;    
            data.save(function(err, item){
            if(err){
                next(err);
            }
            res.json(item);
            })
            },function(err){
                next(err);
            })
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
            
};
