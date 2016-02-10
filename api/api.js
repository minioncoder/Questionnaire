var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('./models/Interview.js');
var HtmlQue = require('./models/HtmlInterview.js');
var Real = require('./models/QAndA.js');

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

app.delete('/javascript1/:_id', function(req, res){
    //console.log(req.params._id);
    
    Task.remove({_id: req.params._id}, function(err, result){
        if (err) throw err;
    });
    res.json(true);
});

app.put('/javascript1', function(req, res){
   
    Task.findById({_id: req.body.qid}, function(err, result){
        if(err) throw err;
        console.log("Entered put method");
            result.questiontext = req.body.questiontext;
            result.answer = req.body.answer;
            result.save(function(err){
                if(err) throw err;
                res.json({message: 'Data Updated'});
            });
        console.log(result);
    })
    
});

app.get('/html5', function(req, res, done){
    
    HtmlQue.find({hasAnswer: true}, function(err, tasks){
       if(err) return console.error(err);
        console.log(tasks);
        res.json(tasks);
    });
});

app.post('/html5', function(req, res){
    var mynewTask = new HtmlQue({
        questiontext: req.body.questiontext,
        answer: req.body.answer,
        hasAnswer: true
    });
    mynewTask.save(function(err, mynewTask){
        console.log('Entered function');    
    });
    res.json(true);
});

app.put('/html5', function(req, res){
   
    HtmlQue.findById({_id: req.body.qid}, function(err, result){
        if(err) throw err;
        console.log("Entered put method");
            result.questiontext = req.body.questiontext;
            result.answer = req.body.answer;
            result.save(function(err){
                if(err) throw err;
                res.json({message: 'Data Updated'});
            });
        console.log(result);
    })
    
});

app.delete('/html5/:_id', function(req, res){
    //console.log(req.params._id);
    
    HtmlQue.remove({_id: req.params._id}, function(err, result){
        if (err) throw err;
    });
    res.json(true);
});


app.post('/real', function(req, res){
    
    var mynewTask = new Real({
        interviewText: req.body.qDomain,
        createdBy: "Bhavya",
        qandas: [{
            author_id: 1,
            question: {
                q_id: 1,
                qtext: req.body.questiontext,
                createdBy: "Bhavya"
            },
            answer: {
                atext: req.body.answer,
                createdBy: "Bhavya",
                updatedBy: "Sinu"
            }
        }
        ]
    });
    mynewTask.save(function(err, mynewTask){
        console.log('Entered function');    
    });
    res.json(true);
});

app.get('/real', function(req, res, done){
    
    Real.find({}, function(err, preparations){
       if(err) return console.error(err);
        console.log(preparations);
        res.json(preparations);
    });
});

mongoose.connect('mongodb://localhost/Questions');

var server = app.listen(3000, function(){
    console.log('api listening on port ', server.address().port);
});