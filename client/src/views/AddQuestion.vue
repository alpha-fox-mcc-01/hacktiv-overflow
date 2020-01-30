<template>
<div class="container">
  <form @submit.prevent="addQuestion">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Question title" v-model="title" required>
    </div>
    <div class="form-group">
      <label for="textarea">Your Question</label>
      <textarea class="form-control" id="textarea" rows="3" v-model="content"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-question',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    addQuestion () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/questions',
        data: {
          title: this.title,
          content: this.content
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.title = ''
          this.content = ''
          this.$router.push('/')
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
