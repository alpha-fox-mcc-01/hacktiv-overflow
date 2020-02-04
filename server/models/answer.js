var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var answerSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  desc: String,
  votes: [{
    count: Number,
    userId: { type: 'ObjectId', ref: 'User'},
  }],
  userId:{ type: 'ObjectId', ref: 'User'},
  queId:{ type: 'ObjectId', ref: 'Question'}
},{timestamps: true}
);



var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer

