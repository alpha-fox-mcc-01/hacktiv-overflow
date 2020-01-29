const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const questionRouter = require('./question');
const answerRouter = require('./answer');

router.use('/user', userRouter);
router.use('/question', questionRouter);

module.exports = router;