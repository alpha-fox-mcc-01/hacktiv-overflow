const { Answer } = require('../models');

class AnswerController {
  static addAnswer(req, res, next) {
    const { title, content } = req.body;
    const { id } = req.params;
    Answer.create({
      title,
      content,
      authorId: req.currentUserId,
      questionId: id
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

  static deleteAnswer(req, res, next) {
    const { id } = req.params;
    Answer.findByIdAndDelete(id)
      .then(question => {
        if(question) {
          res.status(200).json(question);
        } else {
          next({
            name: 'Not Found',
            status: 404,
            errors: [ 'Question not found' ]
          })
        }
      })
      .catch(next);
  }
};

module.exports = AnswerController;