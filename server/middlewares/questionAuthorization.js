const { Question } = require('../models');

module.exports = (req, res, next) => {
  const { id } = req.params;
  Question.findById(id)
    .then(question => {
      if(req.currentUserId == question.authorId) {
        next();
      } else {
        next({
          name: 'Unauthorized',
          status: 401,
          errors: [ 'You are not authorized to take this action' ]
        })
      }
    })
};