///<reference path="../def/node.d.ts" />
///<reference path="../def/express.d.ts" />

/*
import readline = require ('readline');
import stream = require('stream');

class ReadLineOptions implements readline.ReadLineOptions{
    constructor(public input: stream.ReadableStream, public output: stream.WritableStream)  {}
}

var options = new ReadLineOptions(<stream.ReadableStream>process.stdin, <stream.WritableStream>process.stdout);

var rl = readline.createInterface(options);
rl.question('What is your name?', name => {
    console.log('Holacc ' + name + '!!');
    rl.question('press enter to exit', () =>{rl.close()});
});
*/


import http = require('http');
import path = require('path');
import express = require('express');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../public')));

// development only
//if ('development' == app.get('env')) {
    app.use(express.errorHandler());
//}



var mainIndex = function() {
    return function(req, res) {
        res.render('mainIndex', {
            title: 'welcome to f1Xcope'
        });
    };
};


app.get('/', mainIndex());


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});



