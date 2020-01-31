const express = require('express');
const router = express.Router();
const { QuestionController } = require('../controllers');
const authentication = require('../middlewares/authentication');

router.get('/', QuestionController.showAllQuestions);
router.get('/userQuestion', authentication, QuestionController.showUserQuestions);
router.get('/:id', QuestionController.showOneQuestion);

router.use(authentication);
router.post('/', QuestionController.addQuestion);
router.put('/:id', QuestionController.editQuestion);
router.delete('/:id', QuestionController.deleteQuestion);
router.patch('/:id', QuestionController.voteQuestion);

module.exports = router;
