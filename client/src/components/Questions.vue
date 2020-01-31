<template>
  <div class="questions">
    <Question v-for="question in questions" :key="question._id" :question="question"/>
  </div>
</template>

<script>
import axios from 'axios'
import Question from '@/components/Question.vue'

export default {
  data () {
    return {
      questions: ''
    }
  },
  methods: {
    showQuestions () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/questions'
      })
        .then(({ data }) => {
          this.questions = data
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.showQuestions()
  },
  components: {
    Question
  }
}
</script>

<style>

</style>
