<template>
  <div id='featured-div' class='content'>
    <center><h1 >H E A D L I N E</h1></center>
    <hr>
    <div class='row'>
      <FeaturedCard v-for="(question, i) in latestQuestions" :key="question._id" :index='i' :question='question'/>
    </div>
    <hr style='margin-top: 2rem;'>
  </div>
</template>

<script>
import FeaturedCard from '@/components/FeaturedCard'
export default {
  name: 'featured',
  components: {
    FeaturedCard
  },
  computed: {
    latestQuestions () {
      return this.$store.state.questions.slice(0, 4)
    }
  }
}
</script>

<style scoped>
#featured-div {
  margin-left: auto;
  margin-right: auto;
  width: 102rem;
  margin-top: 3rem;
}
</style>
