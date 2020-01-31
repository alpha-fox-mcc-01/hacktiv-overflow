<template>
  <div>
    <b-card class='question-card' @click='viewDetail(question._id)' :title="question.title" :sub-title="question.questionedBy.username">
      <b-card-text v-html='question.description'>
        {{ question.description }}
      </b-card-text>
      <b-card-text style='color: rgb(132, 0, 255);'>
        Tags: {{ question.tags.join(',') }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: Object
  },
  methods: {
    viewDetail (id) {
      this.$store.commit('SET_VIEW', true)
      this.$router.push(`/discover/${id}`)
    }
  }
}
</script>

<style scoped>
.question-card {
  cursor: pointer;
}
.question-card:hover {
  opacity: 0.7;
}
</style>
