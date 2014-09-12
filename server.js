//=================

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var winston = require('winston');
var expressWinston = require('express-winston');

function logger() { 
 return    expressWinston.logger({
        transports: [
//        new winston.transports.Console({
//            json: true,
//            colorize: true
//        }),
            new winston.transports.File({
                filename : __dirname + '/log/app.log',
            json: true,
            colorize: true,
            handleExceptions : true,

            }),
            ],
           meta: true, // optional: control whether you want to log the meta data about the request (default to true)
           msg: "HTTP {{req.method}} {{req.url}}" // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    });

}
module.exports.logger = logger;
    



    //====End Imports======

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(methodOverride('X-HTTP-Method-Override'));
//winston logger
app.use(logger());
app.use(express.static(__dirname+'/public'));
require('./app/routes')(app);

//ports/serverip
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 80

//===Start it up===

app.listen(server_port);

exports = module.exports = app;
exports = module.exports = logger;

