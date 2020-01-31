<template>
  <div class='col-md-4'>
    <h1>Ask the community.</h1>
    <hr>
    <TextEditor :purpose="'newQuestion'"/>
    <hr>
    <h4 style='color: rgb(132, 0, 255);'>Your recent questions</h4>
    <div id='content' v-if='isLogin'>
      <MinifiedQuestion :isUser='true' v-for='question in userQuestions' :key='question._id' :question='question'/>
    </div>
    <div v-else style='margin-top: 5rem;'>
      <center><img src='../../public/people.png' width=200 height=150>
      <h3 style='margin-top: 3rem; opacity: 0.7;'>Sign in now to get access to full features!</h3></center>
    </div>
  </div>
</template>

<script>
import MinifiedQuestion from './MinifiedQuestion'
import TextEditor from './Editor'
export default {
  name: 'userSection',
  components: {
    TextEditor,
    MinifiedQuestion
  },
  computed: {
    userQuestions () {
      return this.$store.state.userQuestions.slice(0, 5)
    },
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    this.$store.dispatch('getUserQuestions')
  }
}
</script>

<style scoped>
#content {
  margin-left: 1rem;
  margin-top: 1rem;
}
</style>
