const Answer = require('../models/answer')

class queController{

  static add(req, res){
    // console.log('sampe kesini controller add answer');
    
    let obj={
      title: req.body.title,
      desc: req.body.desc,
      userId: req.currentUserId,
      queId: req.params.id  
      // votes: {
      //   count: req.body.count,
      //   userId: req.currentUserId
      // }
    }

    Answer.create(obj)
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static addVotes(req, res){
    // params here is answerId
      let obj ={
        count: req.body.count,
        userId: req.currentUserId
      }

      let ct = req.body.count
      //findOne Answer with userId
      // if found{neutralized(whether the value is the same)}
      // else {add new data}

      Answer.findOne(
      { _id:req.params.id, 'votes.userId': req.currentUserId})
      .then(data =>{

        if (data){

          const indexOfUser = data.votes.findIndex(el => el.userId.toString() == req.currentUserId)
          console.log(indexOfUser, 'ini indexnyaa');

          if(data.votes[indexOfUser].count == ct){
            // ini kalo sama
            console.log('dapet', data);
            return Answer.findByIdAndUpdate(
              req.params.id,
              { $pull: { 'votes': { userId: req.currentUserId } } })
              // neautralize data
          }else{
            // kalo beda
            
            return Answer.updateOne(
              { _id:req.params.id, 'votes.userId': req.currentUserId}, {
                '$set': {
                  'votes.$.count': ct
                }
              })
          }
          
         
        }else{
          // add new data
          console.log('gadapet');
          return Answer.update(
            { _id: req.params.id },
            { $push: { votes: obj } })
          
        }
      })
      .then(databaru =>{
        console.log(databaru, 'data baru');
        
        res.status(201).json(databaru)
      })
      .catch(err =>{
        res.status(500).json(err)
      })

  }

  static update(req, res){
    Answer.updateOne({ _id: req.params.id},{
      title: req.body.title,
      desc: req.body.desc,
    })
    .then(databaru =>{
      res.status(200).json(databaru)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static getAnswer(req, res){
    // get all answer for one specific qestion

    Answer.find({
      queId: req.params.id
    }).populate('userId')
    .then(databaru =>{
      res.status(200).json(databaru)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static getMy(req, res){
    console.log('masuk ke get my');
    
    Answer.find({
      userId: req.currentUserId
    }).populate('queId')
    .then(data =>{
      console.log(data);
      
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static getOneAnswer(req, res){
    console.log('masuk ke get my', req.params.id);
    
    Answer.findOne({
      _id: req.params.id
    })
    .then(data =>{
      console.log(data);
      
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

}

module.exports = queController