<template>
  <div class="card my-2 shadow w-100">
    <div class="row container">
      <div class="col-1 my-5 mx-3">
        <div class="row">
          <button>
          <i class="fas fa-angle-up"></i>
        </button>
        </div>
        <div class="row">
          <h1>{{ question.vote }}</h1>
        </div>
        <div class="row">
          <button>
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="card-header bg-white">
          {{ question.title }}
        </div>
        <div class="card-body text-left">
          <div class="card-text">
          {{ question.content }}
          </div>
          <button class="btn-primary" @click="seeDetails(question._id)">See More</button>
        </div>
        <small>Posted By: {{question.userId.username}}</small><br>
        <small>Posted At: {{question.created_at}}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-card',
  props: {
    question: Object
  },
  methods: {
    seeDetails (id) {
      this.$router.push(`/questions/${id}`)
    }
  }
}
</script>

<style>

</style>
