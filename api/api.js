var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('./models/Interview.js');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.post('/domainNames', function(req, res){
    console.log(req.body);
    res.send("hi");
});

app.get('/javascript1', function(req, res, done){
    
    Task.find({hasAnswer: true}, function(err, tasks){
       if(err) return console.error(err);
        console.log(tasks);
        res.json(tasks);
    });
});

app.post('/javascript1', function(req, res){
    var mynewTask = new Task({
        questiontext: req.body.questiontext,
        Answer: req.body.Answer,
        hasAnswer: true
    });
    mynewTask.save(function(err, mynewTask){
        console.log('Entered function');    
    });
    res.json(true);
});

mongoose.connect('mongodb://localhost/Questions');

var server = app.listen(3000, function(){
    console.log('api listening on port ', server.address().port);
});