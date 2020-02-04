<template>
 <div class="container">
   <h1>My Questions</h1>
   <!-- {{myQue}} -->
   <addQuestions/>
   <listQuestions
   v-for="que in myQue"
   :key="que._id"
   :que="que"
   />
   <!-- <addProduct/>
   <allProduct/> -->
    <router-view/>
 </div>
</template>

<script>
// import addProduct from '../components/addProduct'
// import allProduct from '../components/allProduct'
import addQuestions from '../components/addQuestions'
import listQuestions from '../components/listQuestions'
export default {
name: 'myQuesntion',
computed:{
    myQue() {
      return this.$store.state.myQuestions;
    },
},
components:{
  // addProduct,
  // allProduct,
  listQuestions,
  addQuestions
},
 created: function(){
     this.$store.dispatch('getMyQuestions')

  }
}
</script>

<style>

</style>