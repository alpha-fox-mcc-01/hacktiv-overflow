const express = require('express');
const router = express.Router();
const { QuestionController } = require('../controllers');

router.get('/', QuestionController.showAllQuestions);
router.get('/:id', QuestionController.showOneQuestion);
router.post('/', QuestionController.addQuestion);
router.put('/:id', QuestionController.editQuestion);
router.delete('/:id', QuestionController.deleteQuestion);
router.patch('/:id', QuestionController.voteQuestion);

module.exports = router;
