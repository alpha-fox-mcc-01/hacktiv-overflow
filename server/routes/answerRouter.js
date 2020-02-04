const router = require('express').Router()
const authenticated = require('../middlewares/authenticated')
const answerController = require('../controllers/answerController')

router.post('/:id', authenticated, answerController.add)
router.post('/votes/:id', authenticated, answerController.addVotes)
router.put('/:id', authenticated, answerController.update)
router.get('/myAnswer', authenticated, answerController.getMy)
router.get('/:id', answerController.getAnswer)
router.get('/one/:id', answerController.getOneAnswer)



module.exports = router