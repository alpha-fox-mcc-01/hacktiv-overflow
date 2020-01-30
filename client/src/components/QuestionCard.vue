<template>
  <div class="card my-2 shadow w-100">
    <div class="row container">
      <div class="col-1 my-5">
        <button>
          <i class="fas fa-angle-up"></i>
        </button>
        {{ question.vote }}
        <button>
          <i class="fas fa-angle-down"></i>
        </button>
      </div>
      <div class="col">
        <div class="card-header bg-white">
          {{ question.title }}
        </div>
        <div class="card-body text-left">
          <div class="card-text">
          {{ question.content }}
          </div>
          <button class="btn-primary">See More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-card',
  props: {
    question: Object
  }
}
</script>

<style>

</style>
