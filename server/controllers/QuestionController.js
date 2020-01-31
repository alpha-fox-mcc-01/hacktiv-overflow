const { Question, Answer } = require('../models');

class QuestionController {
  static showAllQuestions(req, res, next) {
    Question.find().populate('authorId').sort({ createdAt: -1 })
      .then(questions => {
        res.status(200).json(questions);
      })
      .catch(next);
  }

  static showOneQuestion(req, res, next) {
    const { id } = req.params;
    Question.findById(id).populate('authorId')
      .then(question => {
        res.status(200).json(question);
      })
      .catch(next);
  }

  static showUserQuestions(req, res, next) {
    Question.find({
      authorId: req.currentUserId
    }).populate('authorId').sort({ createdAt: -1 })
      .then(questions => {
        res.status(200).json(questions);
      })
      .catch(next);
  }

  static addQuestion(req, res, next) {
    const { title, content } = req.body;
    Question.create({
      title,
      content,
      authorId: req.currentUserId
    })
      .then(question => {
        res.status(201).json(question);
      })
      .catch(next);
  }

  static editQuestion(req, res, next) {
    const { title, content } = req.body;
    const { id } = req.params;
    Question.findByIdAndUpdate(id, {
      title,
      content
    }, { runValidators: true })
      .then(question => {
        res.status(201).json(question);
      })
      .catch(next);
  }

  static deleteQuestion(req, res, next) {
    const { id } = req.params;
    Question.findByIdAndDelete(id)
      .then(question => {
        if(question) {
          return Answer.deleteMany({
            questionId: question._id
          })

        } else {
          next({
            name: 'Not Found',
            status: 404,
            errors: [ 'Question not found' ]
          })
        }
      })
      .then(_ => {
        res.status(200).json({
          message: 'Question deleted successfully'
        });
      })
      .catch(next);
  }

  static voteQuestion(req, res, next) {
    const voteByUser = {
      vote: req.body.vote,
      userId: req.currentUserId
    };
    const { id } = req.params;
    Question.findOne({
      _id: id,
      'votes.userId': req.currentUserId
    })
      .then(question => {
        if(question) {
          const indexOfUser = question.votes.findIndex(el => el.userId.toString() == req.currentUserId);
          if(question.votes[indexOfUser].vote == req.body.vote) {
            return Question.findByIdAndUpdate(id, {
              $pull: {
                'votes': {
                  userId: req.currentUserId
                }
              }
            });
          } else {
            return Question.updateOne({
              _id: id,
              'votes.userId': req.currentUserId
            }, {
              '$set': {
                'votes.$.vote': req.body.vote
              }
            });
          }
        } else {
          return Question.update({
            _id: id
          }, {
            $push: {
              votes: voteByUser
            }
          })
        }
      })
      .then(question => {
        res.status(201).json(question);
      })
      .catch(next);
  }
};

module.exports = QuestionController;