<template>
  <div class="row justify-content-center my-4">
    <div class="col-8 text-left">
      <div class="card shadow">
        <h6 class="card-header text-right">
          <i>
            <strong>{{item.userId.name}} bertanya</strong>
          </i>
        </h6>
        <div class="card-body">
          <h5 class="card-title">
            <strong>{{item.title}}</strong>
          </h5>
          <p class="card-text">{{item.description}}</p>
          <button class="btn btn-primary" @click="seeThread(item._id)">See thread</button>
          <a href="#" class="btn btn-success ml-3 btn-sm">
            <i class="fas fa-chevron-up"></i>
          </a>
          <a href="#" class="btn btn-danger ml-2 btn-sm">
            <i class="fas fa-chevron-down"></i>
          </a>
          <p class="text-right p-0 m-0">
            <strong>total upvotes: 10</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: `publicQuestionCard`,
  props: ["item"],
  data() {
    return {
    }
  },
  methods : {
    seeThread (questionId) {
      this.$router.push(`/publicquestions/${questionId}`)
    }
  }
};
</script>

<style>
</style>