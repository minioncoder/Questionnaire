var mongoose = require('mongoose');

var htmlquestionsSchema = new mongoose.Schema({
    questiontext: {type: String},
    answer: {type: String},
    hasAnswer: Boolean
});
module.exports = mongoose.model('HtmlInterview', htmlquestionsSchema);

htmlquestionsSchema.pre('save', function(next){
    next();
});
