<template>
  <div>
  <b-card :header="Question.title" header-bg-variant="primary" header-text-variant="white" :sub-title="Question.username">
    <b-card-text>
      {{Question.question}}
    </b-card-text>

    <a href="#" class="card-link">Reply</a>
    <b-link href="#" class="card-link">Edit</b-link>
    <b-link v-on:click="deleteQuestion(Question._id)" class="card-link">Delete</b-link>
  </b-card>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    Question: Object
  },
  data () {
    return {
    }
  },
  methods: {
    deleteQuestion (id) {
      axios({
        method: 'DELETE',
        headers: {
          'token': localStorage.getItem('token')
        },
        url: 'http://localhost:3000/questions/' + id
      })
        .then(({ data }) => {
          console.log(data)
          this.$router.go()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
