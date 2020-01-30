<template>
  <div>
    <b-card @click='viewDetail(question._id)' :title="question.title" :sub-title="question.questionedBy.username">
      <b-card-text>
        {{ question.description }}
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

</style>
