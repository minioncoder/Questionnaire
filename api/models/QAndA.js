var mongoose = require('mongoose');
 
var Question = new mongoose.Schema({
    q_id: {type: Number},
    qtext: {type: String},
    createdDt: {type: Date, default: Date.now},
    createdBy: {type: String}
});

var Answer = new mongoose.Schema({
    atext: {type: String},
    createdDt: {type: Date, default: Date.now},
    createdBy: {type: String},
    updatedBy: {type: String} 
});

var QAndAs = new mongoose.Schema({
    author_id: {type: Number},
    question: {type: [ Question ]},
    answer: {type: [ Answer ]}
});

var prepareSchema = new mongoose.Schema({
    interviewText: {type: String},
    createdBy: {type: String},
    createdDt: {type: Date, default: Date.now},
    qandas: {type: [QAndAs]}
});


module.exports = mongoose.model('Preparation', prepareSchema);

prepareSchema.pre('save', function(next){
    next();
});
