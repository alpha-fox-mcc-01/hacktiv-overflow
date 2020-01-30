const { Answer } = require('../models');

class AnswerController {
  static showAnswers(req, res, next) {
    const { questionId } = req.params;
    Answer.find({
      questionId
    }).populate('authorId')
      .then(answers => {
        res.status(200).json(answers);
      })
      .catch(next);
  }

  static addAnswer(req, res, next) {
    const { title, content } = req.body;
    const { questionId } = req.params;
    Answer.create({
      title,
      content,
      authorId: req.currentUserId,
      questionId
    })
      .then(question => {
        res.status(201).json(question);
      })
      .catch(next);
  }

  static editAnswer(req, res, next) {
    const { title, content } = req.body;
    const { id } = req.params;
    Answer.findByIdAndUpdate(id, {
      title,
      content
    }, { runValidators: true })
      .then(question => {
        res.status(201).json(question);
      })
      .catch(next);
  }

  static voteAnswer(req, res, next) {
    const voteByUser = {
      vote: req.body.vote,
      userId: req.currentUserId
    };
    const { id } = req.params;
    Answer.findOne({
      _id: id,
      'votes.userId': req.currentUserId
    })
      .then(answer => {
        if(answer) {
          const indexOfUser = answer.votes.findIndex(el => el.userId.toString() == req.currentUserId);
          if(answer.votes[indexOfUser].vote == req.body.vote) {
            return Answer.findByIdAndUpdate(id, {
              $pull: {
                'votes': {
                  userId: req.currentUserId
                }
              }
            });
          } else {
            return Answer.updateOne({
              _id: id,
              'votes.userId': req.currentUserId
            }, {
              '$set': {
                'votes.$.vote': req.body.vote
              }
            });
          }
        } else {
          return Answer.update({
            _id: id
          }, {
            $push: {
              votes: voteByUser
            }
          })
        }
      })
      .then(votedAnswer => {
        res.status(201).json(votedAnswer);
      })
      .catch(next);
  }
};

module.exports = AnswerController;