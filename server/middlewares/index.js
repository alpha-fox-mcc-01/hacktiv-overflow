const authentication = require('../middlewares/authentication')
const authorizationQuestion = require('../middlewares/authorizationQuestions')
const authorizationAnswer = require('../middlewares/authorizationAnswers')
const errorHandler = require('../middlewares/errorHandler')
module.exports = {
    authentication,
    authorizationQuestion,
    authorizationAnswer,
    errorHandler
}