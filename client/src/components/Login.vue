<template>
  <div class="container">
      <b-form @submit.prevent="login">
          <b-row>
              <b-col cols="3">
                <h5>Username :</h5>
              </b-col>
              <b-col cols="6">
                  <b-input type="text" v-model="username"/>
              </b-col>
          </b-row>
          <b-row>
              <b-col cols="3">
                <h5>Password :</h5>
              </b-col>
              <b-col cols="6">
                  <b-input type="password" v-model="password"/>
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
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/login',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(user => {
          console.log(user)
          localStorage.setItem('token', user.data.token)
          this.$router.push('/questions')
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
