const express = require('express');
const router = express.Router();
const { AnswerController } = require('../controllers');

router.post('/', AnswerController.addAnswer);
router.put('/:id', AnswerController.editAnswer);
router.delete('/:id', AnswerController.deleteAnswer);

module.exports = router;