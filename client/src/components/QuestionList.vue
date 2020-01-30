<template>
  <div id='question-list' class='col-md-8'>
    <Question v-for='question in questions' :key='question._id' :question='question' />
  </div>
</template>

<script>
import Question from '@/components/Question.vue'
export default {
  name: 'questionList',
  components: {
    Question
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  created () {
    this.$store.dispatch('getQuestions')
  }
}
</script>

<style scoped>
#question-list {
  height: 51rem;
  overflow-y: auto;
}
</style>
