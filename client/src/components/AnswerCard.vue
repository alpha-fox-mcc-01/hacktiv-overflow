<template>
  <div class="card w-100">
    <div class="row container">
      <div class="col-1 my-5 mx-3">
        <div class="row">
          <button>
          <i class="fas fa-angle-up"></i>
        </button>
        </div>
        <div class="row">
          <h1>{{ answer.vote }}</h1>
        </div>
        <div class="row">
          <button>
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
      <div class="col">
        <div class="card-header bg-white">
          <h5>{{ answer.title }}</h5>
          <small>Posted By: {{username}}</small> <br>
          <small>Posted At: {{answer.created_at}}</small>
        </div>
        <div class="card-body text-left">
          <div class="card-text">
          {{ answer.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'answer-card',
  data () {
    return {
      username: ''
    }
  },
  props: {
    answer: Object
  },
  methods: {
    getName () {
      axios({
        method: 'GET',
        url: `http://localhost:3000/answers/${this.answer._id}`
      })
        .then(({ data }) => {
          this.username = data.userId.username
          this.$store.dispatch('isLoginNav', true)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getName()
  }
}
</script>

<style>

</style>
