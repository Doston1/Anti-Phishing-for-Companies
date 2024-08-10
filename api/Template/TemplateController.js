var CurrentTemplate = require('./TemplateModel');

exports.test = function(req, res, next){
    res.json({firstmessage:"hello world"});
};


exports.getall = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentTemplate.find( {} ).then(function(data){
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
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            console.log(req.body);
            var img_url = req.body.img_url;
            var html_url = req.body.html_url;
            var title = req.body.title;
            var template_text = req.body.template_text;
            var url_email_main = req.body.url_email_main;
            var p1 = {img_url: img_url, html_url: html_url, title: title, template_text: template_text, url_email_main: url_email_main,};
            var newItem = new CurrentTemplate(p1);
            newItem.save(function(err, item){
                if(err){
                    next(err);
                }
                res.json({template:item});
            });//end of save
        }
        else if(!data1) // if it does not 
        {
            res.json('you are not allowed to use this function');
        }
    });
};

exports.delete = function(req, res, next){
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentTemplate.remove({_id:req.body.id}).then(function(){
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
    CurrentAdmin.findOne({_id:req.body.idkey}).then(function(data1){
        if(data1) //if it does
        {
            CurrentTemplate.findOne({_id:req.body.id}).then(function(data){
                data.img_url = req.body.img_url;
                data.html_url = req.body.html_url;
                data.title = req.body.title;
                data.template_text = req.body.template_text;
                data.url_email_main = req.body.url_email_main;
            
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
