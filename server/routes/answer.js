const express = require('express');
const router = express.Router();
const { AnswerController } = require('../controllers');
const authentication = require('../middlewares/authentication');

router.get('/:questionId', AnswerController.showAnswers);

router.use(authentication);
router.post('/:questionId', AnswerController.addAnswer);
router.put('/:id', AnswerController.editAnswer);
router.patch('/:id', AnswerController.voteAnswer);

module.exports = router;