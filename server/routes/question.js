const router = require('express').Router()
const Question = require('../controllers/Question')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/', authentication, Question.create)

router.get('/', Question.getAllQuestion)

router.get('/:id', Question.getOneQuestion)

router.put('/:id', authentication, authorization, Question.updateQuestion)

router.delete('/:id', authentication, authorization, Question.deleteQuestion)

// router.patch('/:id', authentication, authorization,(req, res, next)=>{
//     const { stock } = req.body
//     Question.findByIdAndUpdate(req.params.id, {
//         stock
//     })
//       .then(question=>{
//           res.status(200).json({msg : `Question vote with id ${question._id} updated successfully`})
//       })
//       .catch(err=>{
//           next(err)
//       })
// })

module.exports = router