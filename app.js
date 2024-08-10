var express = require('express');
var app= express();
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var api = require('./api/api')
var nodemailer = require('nodemailer');
var cors = require('cors');
/*
var corsOptions ={
origin: '*' 
}
*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('public'))
app.use('/api',api);

/*
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user : 'dt2001.di@gmail.com',
        pass: 'bek2001926'
    },
    tls: {
        rejectUnauthorized: false
    },
});

let HelperOptions = {
    from: '"Doston Steinman" <dt2001.di@gmail.com',
    to: 'dt2001.di@gmail.com',
    subject: 'Hello YESSS',
    text: 'wow Im such a talented man'
};

transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
        return console.log(error);
    }
    console.log("The message was sent");
    console.log(info);
});
*/

var strConnect ="mongodb://arik:arik@cluster0-shard-00-00-jpa4z.mongodb.net:27017,cluster0-shard-00-01-jpa4z.mongodb.net:27017,cluster0-shard-00-02-jpa4z.mongodb.net:27017/test1?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
const OPT = {useNewUrlParser:true};
mongoose.connect(strConnect, OPT);
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Running on port " + port);
})

//arik
//var strConnect ="mongodb://doston:FzSwNNrACg8uFPcS@cluster0-shard-00-00-jpa4z.mongodb.net:27017,cluster0-shard-00-01-jpa4z.mongodb.net:27017,cluster0-shard-00-02-jpa4z.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
//FzSwNNrACg8uFPcS

//"5c8b06e352979c384872655c","5c8b06e352979c384872655d","5c8b06e352979c384872655e"