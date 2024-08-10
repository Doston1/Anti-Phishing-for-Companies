var CurrentManager = require('./ManagerModel');
var CurrentAdmin = require('../Admin/AdminModel');

exports.get = function(req, res, next){
    
    res.json({firstmessage:"hello world"});
};


exports.getall = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentManager.find( {} ).then(function(data){
                res.json(data);
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
    //res.json({success: true});
};


exports.insert = function(req, res, next){
    console.log(req.body);
    CurrentManager.findOne({email:req.body.email}).then(function(data){
        if(data) //if it does
        {
            res.json("email in use");

        }
        else if(!data) // if it does not 
        {
            var first_name = req.body.first_name;
            var last_name = req.body.last_name;
            var email = req.body.email;
            var password = req.body.password;
            var current = req.body.current;
            var modified = req.body.modified;
            var p1 = {first_name:first_name,  last_name: last_name,  email: email,  password: password, current: current,  modified: modified };
            var newItem = new CurrentManager(p1);
            newItem.save(function(err, item){
                if(err){
                    next(err);
                }
                res.json({manager:item});
            });//end of save
        }
    });
    /*
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    var current = req.body.current;
    var modified = req.body.modified;
    var p1 = {first_name:first_name,  last_name: last_name,  email: email,  password: password, current: current,  modified: modified };
    var newItem = new CurrentManager(p1);
        newItem.save(function(err, item){
            if(err){
                next(err);
            }
            res.json({manager:item});
        });//end of save
        */
};//end of insert

exports.delete = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentManager.remove({_id:req.body.id}).then(function(){
                    res.send({"deleted " : req.body.id});
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
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentManager.findOne({_id:req.body.id}).then(function(data){
                data.first_name = req.body.first_name;
                data.last_name= req.body.last_name;
                data.email = req.body.email;
                data.password= req.body.password;
                data.current = req.body.current;
                data.modified = req.body.modified;

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

exports.search = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentManager.findOne({email:req.body.email, password:req.body.password}).then(function(data){
                if(data) //if it does
                {
                    res.json(data._id);

                }
                else if(!data) // if it does not 
                {
                    res.json('000');
                }
            });
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
    //res.json({success: true});
};

/*
exports.isCreated = function(req, res, next){
    CurrentManager.findOne({email:req.body.email}).then(function(data){
        if(data) //if it does
        {
            res.json(true);

        }
        else if(!data) // if it does not 
        {
            res.json(false);
        }
    });
    //res.json({success: true});
};
*/

/*
exports.search = function(req, res, next){
    var str = false;
    CurrentManager.findOne({first_name:req.body.first_name},{password: req.body.password}).then(function(data){
        str = true;
    });
    if(str==true)
        res.json(true);
    else
        res.json(false);
};  
*/