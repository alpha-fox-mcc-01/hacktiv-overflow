<template>
  <div class="container mt-3">
    <h2 style="text-align: left;">Question</h2>
    <hr>
    <n-card-details :data="oneQuestion"/>
    <hr/>
    <div>
      <blockquote class="blockquote mb-0" style="text-align: left;">
        <h2>Answers</h2>
        <hr>
        <blockquote class="blockquote mb-0" v-if="answers !== 'No Answers found'">
          <n-answers v-for="answer in answers" :key="answer._id" :data="answer"/>
        </blockquote>
        <div v-else>{{ answers }}</div>
      </blockquote>
    </div>
    <hr style="border-top: 1px dotted">
    <n-add-answer :idQuestion="idQuestion" @fetch-answers="fetchAnswers"/>
  </div>
</template>

<script>
import nCardDetails from '../components/n-card-details'
import nAnswers from '../components/n-answers'
import nAddAnswer from '../components/n-add-answer'
export default {
  name: 'QuestionDetails',
  components: {
    nCardDetails,
    nAnswers,
    nAddAnswer
  },
  data () {
    return {
      answers: []
    }
  },
  methods: {
    fetchAnswers () {
      console.log('masuk fetch answers')
      this.$store.dispatch('fetchAnswers', this.idQuestion)
        .then(({ data }) => {
          console.log(data, 'ini fetch answers')
          this.answers = data
        })
        .catch(({ response }) => {
          console.log(response)
          this.answers = 'No Answers found'
        })
    }
  },
  computed: {
    idQuestion () {
      return this.$route.params.id
    },
    oneQuestion () {
      return this.$store.state.oneQuestion
    }
  },
  created () {
    this.$store.dispatch('fetchOneQuestion', this.idQuestion)
    this.fetchAnswers()
  },
  watch: {
    $route (to, from) {
      this.$store.dispatch('fetchOneQuestion', this.idQuestion)
    }
  }
}
</script>

<style>

</style>
