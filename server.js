//=================

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var winston = require('winston');
var   expressWinston = require('express-winston');

//====End Imports======

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
//winston logger


app.use(expressWinston.logger({
    transports: [
    new winston.transports.Console({
        json: true,
        colorize: true
    })
],
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}" // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
}));
require('./app/routes')(app);
var port = process.env.PORT || 8999;


//===Start it up===

app.listen(port);

exports = module.exports = app;


