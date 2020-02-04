<template>
 <div class="container">
   <h1>My Answers</h1>
   <!-- {{myAnswers}} -->
   <!-- <addQuestions/> -->
   <answerItem
   v-for="answer in myAnswers"
   :key="answer._id"
   :answer="answer"
   />
   <!-- <addProduct/>
   <allProduct/> -->
    <router-view/>
 </div>
</template>

<script>
// import addProduct from '../components/addProduct'
// import allProduct from '../components/allProduct'
import answerItem from '../components/answerItem'
export default {
name: 'myAnswers',
computed:{
    myAnswers() {
      return this.$store.state.myAnswers;
    },
},
components:{
  answerItem
},
 created: function(){
     this.$store.dispatch('getMyAnswer')

  }
}
</script>

<style>

</style>