const { Answer } = require('../models');

module.exports = (req, res, next) => {
  const { id } = req.params;
  Answer.findById(id)
    .then(answer => {
      if(req.currentUserId == answer.authorId) {
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