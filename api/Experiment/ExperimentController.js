var CurrentExperiment = require('./ExperimentModel');
var CurrentUser = require('../User/UserModel');
var CurrentManager = require('../Manager/ManagerModel');
var CurrentAdmin = require('../Admin/AdminModel');
var nodeMailer = require('nodemailer');
var url = require('url');
global.howMany = 0;

exports.test = function(req, res, next){
    res.json({firstmessage:"hello world"});
};


exports.getall = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){       //admins can watch all experiments
        if(data1) //if it does
        {
            CurrentExperiment.find( {} ).populate('manager_id').populate('template_id').populate({path: 'user_ids', model: 'user'}).then(function(data){
            //populate('user_ids').
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
    //res.json({success: true});
};

exports.managergetall = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            CurrentExperiment.find( {manager_id:data1._id} ).populate('manager_id').populate('template_id').populate({path: 'user_ids', model: 'user'}).then(function(data){
            //populate('user_ids').
                res.json(data)
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
};

exports.insert = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            var name = req.body.name;
            var manager_id = req.body.manager_id;
            var template_id = req.body.template_id;
            var user_ids = req.body.user_ids;
            var last_pos = req.body.last_pos;
            var p1 = {name: name, manager_id: manager_id, template_id: template_id, user_ids: user_ids, last_pos: last_pos};
            var newItem = new CurrentExperiment(p1);
            newItem.save(function(err, item){
                if(err){
                    next(err);
                }
                res.json(item._id);
            });//end of save
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
};

exports.updateUsers = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            CurrentExperiment.findOne({_id:req.body.id}).then(function(data){
                var arr1 = new Array();
                var i = 0;
                var p1, newItem;
                var x = "";
                console.log(req.body);
                var manager_id = data.manager_id;
                var template_id = data.template_id;
                var is_fished = false;
                arr1 = req.body.users;
                for(i =0; i<arr1.length;i++)
                {
                    p1 = {manager_id: manager_id, to_email: arr1[i], is_fished: is_fished, template_id: template_id};
                    newItem = new CurrentUser(p1);
                    newItem.save(function(err, item){
                        if(err){
                            next(err);
                        }
                    });//end of save
                    //x = newItem.id;
                    //data.user_ids[i] = x;
                    data.user_ids.push(newItem.id);
                    data.last_pos = i;
                }//end of for
                data.save(function(err, item)
                {
                    if(err){
                        next(err);
                    }
                },
                function(err){
                    next(err);
                })//end of save, end of creating users, saving them and entering their ids to user_ids.
                //console.log(data);
        //------------------------------------------------------------------------------------------------

            }, function(err){
                next(err);
            });//end of findOne2
            res.json({success:true});
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
};

exports.sendIt = function(req, res, next){
    console.log("STARTINGGGGGGGGGGGGGGGGG SENDITSENDITSENDIT");
    console.log(req.body);
    console.log(req.body.idKey);
    try{
        CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
            if(data1) //if it does
            {
                CurrentExperiment.findOne({_id:req.body.id}).then(function(data){
                    var x = "";
                    for(i=0;i<data.user_ids.length;i++)
                    {
                        CurrentUser.findOne({_id: data.user_ids[i]}).then(function(data2){
                                x = data2.to_email;
                            
                            let transporter = nodeMailer.createTransport({
                                service: 'gmail',
                                secure: false,
                                port: 25,
                                auth: {
                                    user : 'dt2001.di@gmail.com',
                                    pass: 'bek19941214'
                                },
                                tls: {
                                    rejectUnauthorized: false
                                },
                            });
                            
                            let HelperOptions = {
                                from: '"Doston Steinman" <dt2001.di@gmail.com',
                                to: x,
                                subject: 'Hello YESSS',
                                text: 'bagrut.herokuapp.com/dist/?id=' + data2._id 
                            };

                            transporter.sendMail(HelperOptions, (error, info) => {
                                if(error){
                                    console.log("The message was sent");
                                    console.log(info);
                                    return console.log(error);
                                }
                                console.log("The message was sent");
                                console.log(info);
                            });//end of sendmail
                        }, function(err){
                            next(err);
                        });//end of findOne2
                    }//end of for   
                }, function(err){
                    next(err);
                });//end of findOne
                res.json("Sent It!!!")
            }
            else if(!data1) // if it does not 
            {
                res.json('you are not allowed to use this function');
            }
        });
    }
    catch(err){console.log(err);}
}

exports.delete = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            CurrentExperiment.remove({_id:req.body.id}).then(function(){
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
};

exports.update = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            CurrentExperiment.findOne({_id:req.body.id}).then(function(data){
                data.name = req.body.name;
                data.manager_id = req.body.manager_id;;    
                data.template_id = req.body.template_id;    
                data.user_ids = data.user_ids;
                data.last_pos  = data.last_pos;
            data.save(function(err, item){
            if(err){
                next(err);
            }
            res.json(item);
            })
            },function(err){
                next(err);
            })//end of save
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
};

exports.printusers = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            var i;
            var s = "";
            CurrentExperiment.findOne({_id:req.body.id}).then(function(data){
                for(i=0;i<3;i++)
                {
                    s += data.user_ids[i];
                }
                res.json({id: data.user_ids[0]});
            });//end of finedOne
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
}//end of function


exports.urlfind = function(req, res, next){
    CurrentUser.findOne({_id:req.body.id}).then(function(data){
        data.is_fished = true;
        data.save(function(err, item){
            if(err){
                next(err);
            }
            //res.json(item);
            });//end of save
            },function(err){
                next(err);
    });//end of findone
};

exports.statistics = function(req, res, next){
    var i;
    var stringush = String;
    var s = 0;
    var j  =0;
    var arrr = [];
    CurrentExperiment.find( {_id:req.body.id} ).populate({path: 'user_ids', model: 'user'}).then(function(data){
        stringush = String(data);
        console.log("stringush length = " + stringush.length)
        for(i=0;i<stringush.length-3;i++)
        {
            if((stringush[i] == 't')&&(stringush[i+1]=='r')&&(stringush[i+2]=='u')&&(stringush[i+3]=='e'))
            {
                s+=1;
            }
        }
        CurrentExperiment.findOne({_id:req.body.id}).then(function(data2){
            res.json({entered: s ,all: data2.user_ids.length});
        },function(err){
            next(err);
        });
        },
        function(err){
            next(err);
        });
}

exports.getname = function(req, res, next){
    CurrentManager.findOne({_id:req.body.idkey}).then(function(data1){            //manager can watch his experiments only
        if(data1) //if it does
        {
            CurrentExperiment.findOne({_idkey:req.body.id}).then(function(data){
                res.json(data.name);
            })
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
}