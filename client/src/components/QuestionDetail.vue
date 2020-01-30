<template>
  <div class="row justify-content-center my-4">
    <div class="col-8 text-left">
      <div class="card shadow">
        <h6 class="card-header text-right">
        </h6>
        <div class="card-body">
          <h5 class="card-title">
            <strong>{{title}}</strong>
          </h5>
          <p class="card-text">{{description}}</p>
          <button class="btn btn-primary" @click="seeThread(item._id)">See thread</button>
          <a href="#" class="btn btn-success ml-3 btn-sm">
            <i class="fas fa-chevron-up"></i>
          </a>
          <a href="#" class="btn btn-danger ml-2 btn-sm">
            <i class="fas fa-chevron-down"></i>
          </a>
          <p class="text-right p-0 m-0">
            <strong>total upvotes: 10</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   name : `QuestionDetail`,
   data () {
      return {
         title: '',
         description: '',
         votes: []
      }
   },
   methods : {
      getQuestion() {
         axios ({
            method: `GET`,
            url : `http://localhost:3000/questions/${this.$route.params.questionId}`
         })
            .then(({data}) => {
               console.log(data, `ini getOne question`);
               this.title = data.title
               this.description = data.description
               this.votes = data.votes
            })
            .catch(err => {
               console.log(err.message);          
            })
      }
   },
   computed : {
      questionAnswers () {
         // console.log(this.$store.state.answers, `ini state`);
         // console.log(this.$route.params.questionId, `ini params`);
         
         let arr = []
         let answers = this.$store.state.answers
         for (let i=0; i<=answers.length-1; i++){
            console.log(answers[i].questionId);
            
            if(answers[i].questionId == this.$route.params.questionId){
               arr.push(answers[i])
            }
         }
         return arr
      }
   },
   created () {
      this.getQuestion()
   }
}
</script>

<style>

</style>
