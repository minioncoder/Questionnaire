var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('./models/Interview.js');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
    res.header('Access-Control-Allow-Credentials', true);
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
        answer: req.body.answer,
        hasAnswer: true
    });
    mynewTask.save(function(err, mynewTask){
        console.log('Entered function');    
    });
    res.json(true);
});

app.param('task_id', function(req, res, next, taskId){
    req.db.tasks.findById(taskId, function(err, task){
        if(err) return next(err);
        if(!task) return next(new Error('Task not found'));
        req.task = task;
        return next();
    });
});

app.delete('/javascript1/:_id', function(req, res){
    //console.log(req.params._id);
    
    Task.remove({_id: req.params._id}, function(err, result){
        if (err) throw err;
    });
    res.json(true);
});

app.put('/javascript1/:_id', function(req, res){
   
    console.log(req.params._id);
    Task.findById({_id: req.params._id}, function(err, result){
        if(err) throw err;
        console.log("Entered put method");
        console.log(req.body.questiontext);
        console.log(req.body.answer);
            result.questiontext = req.body.questiontext;
            result.answer = req.body.answer;
            result.save(function(err, result){
                if(err) throw err;
                
                res.json({message: 'Data Updated'});
            });
    })
    
});

mongoose.connect('mongodb://localhost/Questions');

var server = app.listen(3000, function(){
    console.log('api listening on port ', server.address().port);
});