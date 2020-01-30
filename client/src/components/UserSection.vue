<template>
  <div class='col-md-4'>
    <h1>Ask the community.</h1>
    <hr>
    <TextEditor :purpose="'newQuestion'"/>
    <hr>
    <h4 style='color: rgb(132, 0, 255);'>Your recent questions</h4>
    <div id='content'>
      <MinifiedQuestion v-for='question in userQuestions' :key='question._id' :question='question'/>
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
