<template>
  <div class="container">
      <b-form @submit.prevent="register">
          <b-row>
              <b-col cols="3">
                <h5>Email :</h5>
              </b-col>
              <b-col cols="6">
                  <b-input type="email" v-model="email"/>
              </b-col>
          </b-row>
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
    register () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/users/register',
        data: {
          email: this.email,
          username: this.username,
          password: this.password
        }
      })
        .then(({ data }) => {
          this.$swal('Register success!')
        })
        .catch(err => {
          for (let key in err.response.data.message) {
            this.$swal(err.response.data.message[key].message)
          }
        })
    }
  }
}
</script>

<style>

</style>
