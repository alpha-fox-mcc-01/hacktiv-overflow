<template>
  <div class='content'>
    <div class='row'>
      <h5 @click='viewDetail(question._id)'><strong>{{ question.title }}</strong></h5>
    </div>
    <div class='row'>
      <p>{{ question.questionedBy.username }} | {{ question.createdAt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'minified-question',
  props: {
    question: Object
  },
  methods: {
    viewDetail(id) {
      this.$router.push(`/discover/${id}`)
    }
  }
}
</script>

<style>
.content {
  margin-bottom: 0.5rem;
}
</style>
