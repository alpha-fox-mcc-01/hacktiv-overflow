<template>
  <div class="container mt-5">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cardHome
    v-for="que in getQue"
    :key="que._id"
    :que="que"
    />
    <!-- <h1>question part</h1> -->
    <!-- {{getQue}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import cardHome from '@/components/cardHome'
export default {
  name: 'home',
  components: {
    HelloWorld,
    cardHome
  },
  computed:{
    getQue(){
      return this.$store.state.allQuestions
    }
  }
}
</script>
