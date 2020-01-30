const Answer = require('../models/Answer')

class AnswerController {
  static create (req, res, next) {
    const { title, description } = req.body
    Answer.create({
        title,
        description,
        ownerId: req.currentUserId,
        questionId: req.params.idQuestion
    })
      .then(answer=>{
          res.status(201).json({
            answer,
            msg: `Answer with title ${answer.title} created`
          })
      })
      .catch(err=>{
          next(err)
      })
  }

  static getAnswers (req, res, next) {
    Answer.find({questionId: req.headers.questionid })
      .then((answers) =>{
        console.log(answers)
        if (answers.length) res.status(200).json(answers)
        else next({ msg: 'Not found', error: 'No Answer found' })
      })
      .catch(err=>{
          next(err)
      })
  }

  static getOneAnswer (req, res, next) {
    Answer.findById(req.params.id)
      .then(answer=>{
        if (answer) res.status(200).json(answer)
        else next({ msg: 'Not found', error: 'No answer found' })
      })
      .catch(err=>{
          next(err)
      })
  }

  static updateAnswer (req, res, next) {
    const { title, description } = req.body
    Answer.findByIdAndUpdate(req.params.id, {
      title,
      description
    })
      .then(answer=>{
          res.status(200).json({msg : `Answer with title '${answer.title}' updated successfully`, answer})
      })
      .catch(err=>{
          next(err)
      })
  }

}

module.exports = AnswerController