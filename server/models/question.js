var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var questionSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  desc: String,
  votes: [{
    count: Number,
    userId: { type: 'ObjectId', ref: 'User'},
  }],
  userId:{ type: Schema.Types.ObjectId, ref: 'User'},
},{timestamps: true}
);



var Question = mongoose.model('Question', questionSchema);

module.exports = Question

