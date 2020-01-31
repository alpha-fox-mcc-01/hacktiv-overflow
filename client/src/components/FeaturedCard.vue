<template>
  <div class='col-md-3'>
    <div class="card bg-dark text-white" @click='viewDetail(question._id)'>
      <img class="card-img" src="https://i.pinimg.com/originals/95/6f/bd/956fbd85084ccecb8a88610894aad604.jpg" alt="Card image" width=200 height=400>
      <div class="card-img-overlay">
        <h1 class="card-title">{{ question.title }}</h1>
        <p class="card-text">By : {{ question.questionedBy.username }}</p>
        <p class="card-text">Asked : {{ question.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'featuredCard',
  props: {
    question: Object,
    index: Number
  },
  methods: {
    viewDetail (id) {
      this.$router.push(`/discover/${id}`)
    }
  }
}
</script>

<style scoped>
.card.bg-dark.text-white {
  height: 400px;
  width: 370px;
  cursor: pointer;
}
.card.bg-dark.text-white:hover {
  opacity: 0.75;
  transition: .7s ease;
}
</style>
