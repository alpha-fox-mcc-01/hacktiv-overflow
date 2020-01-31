const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    questionId: {type: Schema.Types.ObjectId, ref: 'Question'},
    title: {
        type: String,
        required: 'Title is required!'
    },
    content: {
        type: String
    },
    votes: [{ userId: { type: Schema.Types.ObjectId, ref:'User'}, value: Number}]
}, { timestamps: { createdAt: 'created_at' } })

const Answer = mongoose.model('Answer', answerSchema)
module.exports = Answer

