<template>
  <div class="container">
    <div
    class="row"
    v-for="question in questions"
    :key="question._id"
    >
    <QuestionCard :question="question"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from '../components/QuestionCard'
export default {
  name: 'home',
  components: {
    QuestionCard
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  beforeRouteEnter (to, from, next) {
    const signedIn = localStorage.getItem('token')
    if (signedIn) {
      next()
    } else {
      next('/login')
    }
  },
  created () {
    this.$store.dispatch('fetchQuestion')
  }
}
</script>
