const express = require('express')
const router = express.Router()

router.use('/user', require('./userRouter'))
router.use('/qna', require('./qnaRouter'))

module.exports = router