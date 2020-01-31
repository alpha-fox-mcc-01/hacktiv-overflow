<template>
  <div class="container">
      <b-form @submit.prevent="addQuestion">
          <b-row>
              <b-col cols="3">
                <h5>Answer :</h5>
              </b-col>
              <b-col cols="6">
                  <b-form-textarea type="text" rows="5" v-model="question"/>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                  <b-button type="submit">
                      Submit
                  </b-button>
              </b-col>
          </b-row>
      </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: '',
      question: ''
    }
  },
  methods: {
    addQuestion () {
      axios({
        method: 'POST',
        headers: {
          'token': localStorage.getItem('token')
        },
        url: 'http://localhost:3000/questions/post',
        data: {
          title: this.title,
          question: this.question
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/questions')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
