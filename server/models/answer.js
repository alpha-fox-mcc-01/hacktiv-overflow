const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  title: {
    type: String,
    required: ['Answer title is required']
  },
  content: {
    type: String,
    required: ['Answer description is required']
  },
  authorId: { type: Schema.Types.ObjectId, ref: 'User' },
  votes: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    vote: Number
  }],
  questionId: { type: Schema.Types.ObjectId, ref: 'Question' }
}, { timestamps: true });

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;