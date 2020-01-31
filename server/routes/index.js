const express = require('express')
const router = express.Router()

router.use('/user', require('./userRouter'))
router.use('/qna/post', require('./qnaRouter'))
router.use('/qna/answer', require('./answerRouter'))

module.exports = router