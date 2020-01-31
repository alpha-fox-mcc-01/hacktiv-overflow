const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {
    type: String,
    required: 'Question title is required'
  },
  content: {
    type: String,
    required: 'Question content is required'
  },
  authorId: { type: Schema.Types.ObjectId, ref: 'User' },
  votes: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    vote: Number
  }]
}, { timestamps: true })

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;