<template>
  <div class="container mt-3">
    <n-card-details :data="oneQuestion"/>
    <!-- ini question details
    {{ idQuestion }}
    {{ oneQuestion }} -->
  </div>
</template>

<script>
import nCardDetails from '../components/n-card-details'
export default {
  name: 'QuestionDetails',
  components: {
    nCardDetails
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
    console.log('created qd masuk')
    this.$store.dispatch('fetchOneQuestion', this.idQuestion)
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
