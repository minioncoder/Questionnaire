var mongoose = require('mongoose');

 
var interviewSchema = new mongoose.Schema({
    questiontext: {type: String},
    Answer: {type: String},
    hasAnswer: Boolean
});
module.exports = mongoose.model('Interview', interviewSchema);

interviewSchema.pre('save', function(next){
    next();
});
