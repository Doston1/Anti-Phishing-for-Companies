var CurrentAdmin = require('./AdminModel');

exports.test = function(req, res, next){
    res.json({firstmessage:"hello world"});
};

exports.getall = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentAdmin.find( {} ).then(function(data){
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

exports.insert = function(req, res, next){
    console.log(req.body);
    CurrentAdmin.findOne({email:req.body.email}).then(function(data){
        if(data) //if it does
        {
            res.json("email in use");

        }
        else if(!data) // if it does not 
        {
            if(req.body.name == "shevach")
            {
                var name = req.body.name;
                var email = req.body.email;
                var password = req.body.password;
                var p1 = {email: email,name: name, password: password,};
                var newItem = new CurrentAdmin(p1);
                newItem.save(function(err, item){
                    if(err){
                        next(err);
                    }
                    res.json({Admin:item});
                });//end of save
            }
        }
    });
};

exports.delete = function(req, res, next){
         CurrentAdmin.remove({_id:req.body.id}).then(function(){
            res.send("deleted " + req.body.id);
            }, function(err){
                next(err);
            }
        );
} ;

exports.update = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentAdmin.findOne({_id:req.body.id}).then(function(data){
                data.name = req.body.name;
                data.email = req.body.email;        
                data.password = req.body.password;    
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
    CurrentAdmin.findOne({email:req.body.email, password:req.body.password}).then(function(data){
        if(data) //if it does
        {
            res.json(data._id);

        }
        else if(!data) // if it does not 
        {
            res.json('000');
        }
    });
    //res.json({success: true});
};