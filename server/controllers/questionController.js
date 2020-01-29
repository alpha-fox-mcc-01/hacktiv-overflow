const Question = require('../models/questionModel')

class QuestionController {
   static getAll(req, res, next) {
      Question.find()
         .then(data => {
            res.status(200).json(data)
         })
         .catch(err => {
            console.log(err.message);
            next(err)
         })
   }

   static add(req, res, next) {
      let newQuestion = {
         title: req.body.title,
         description: req.body.description,
         userId: req.currentUserId
      }

      Question.create(newQuestion)
         .then(data => {
            res.status(201).json(data)
         })
         .catch(err => {
            console.log(err.message);
            next(err)
         })
   }

   static deleteQuestion(req, res, next) {
      Question.findOneAndDelete({ _id: req.params.questionId })
         .then(data => {
            if (data) {
               res.status(200).json(data)
            }
            else {
               next({ code: 404, msg: `data not found` })
            }
         })
         .catch(err => {
            next(err)
         })
   }

   static upvote(req, res, next) {
      let newUpvote = {
         user : req.currentUserId
      }
      Question.findOne({ _id: req.params.questionId }).populate('upvote.user')
         .then(data => {            
            if (data) {
               let userSearch = data.upvote.filter (search => {
                  return search.user._id = req.currentUserId
               })

               
               if (userSearch.length < 1) {
                  Question.updateOne({ _id: req.params.questionId }, { $push: { upvote: newUpvote} })
                     .then(data => {
                        res.status(200).json({data, msg : `upvoted`})                     
                     })
                     .catch(err => {
                        next(err)
                     })
               }
               else {
                  res.status(400).json({msg : `you already upvoted it`})
               }

            }
            else {
               next({code: 404, msg: `data not found`})
            }
         })
         .catch(err => {
            next(err)
         })
   }

   static downvote(req, res, next) {
      let newDownvote = {
         user : req.currentUserId
      }
      Question.findOne({ _id: req.params.questionId }).populate('downvote.user')
         .then(data => {            
            if (data) {
               let userSearch = data.downvote.filter (search => {
                  return search.user._id = req.currentUserId
               })

               
               if (userSearch.length < 1) {
                  Question.updateOne({ _id: req.params.questionId }, { $push: { downvote: newDownvote} })
                     .then(data => {
                        res.status(200).json({data, msg : `downvoted`})                     
                     })
                     .catch(err => {
                        next(err)
                     })
               }
               else {
                  res.status(400).json({msg : `you already downvoted it`})
               }

            }
            else {
               next({code: 404, msg: `data not found`})
            }
         })
         .catch(err => {
            next(err)
         })
   }

   static update (req, res, next) {
      let updateData = {
         title : req.body.title,
         description : req.body.description
      }

      Question.findOneAndUpdate({_id : req.params.questionId}, updateData)
         .then (data => {
            if (data) {
               res.status(201).json({data, msg : `updated`})
            }
            else {
               next({code : 404, msg : `data not found`})
            }
         })
         .catch (err => {
            next (err)
         })
   }
}

module.exports = QuestionController
