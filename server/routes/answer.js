const router = require('express').Router()
const Answer = require('../controllers/Answer')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/:idQuestion', authentication, Answer.create)

router.get('/', Answer.getAnswers)

router.get('/:id', Answer.getOneAnswer)

router.put('/:id', authentication, authorization, Answer.updateAnswer)

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
/*
router.post('/:id', authentication, (req, res, next) => {
  if (req.idUser == req.params.id) {
    User.findByIdAndUpdate(req.params.id, {
      $push: {
        cartLists: {
          productId: req.body.productId,
          quantity: req.body.quantity
        }
      }
    })
      .then(user => {
        console.log(user)
        res.status(200).json({msg: 'Add product to cart success'})
      })
      .catch(err => {
        next(err)
      })
  } else {
    next({
      msg: 'Not Authorized',
      desc: 'cart'
    })
  }
  
})

router.delete('/:id', authentication, (req, res, next) => {
  if (req.idUser == req.params.id) {
    User.findByIdAndUpdate(req.params.id, {
      $pull: {
        cartLists: {
          productId: req.body.productId
        }
      }
    })
      .then(user => {
        console.log(user)
        res.status(200).json({msg: 'Delete product from cart success'})
      })
      .catch(err => {
        next(err)
      })
  } else {
    next({
      msg: 'Not Authorized',
      desc: 'cart'
    })
  }
  
})
*/