<template>
  <div class="">
    <div class="card">
      <div class="card-body text-left">
        <form @submit.prevent="login">
          <div class="form-group">
            <label> Email </label>
            <input v-model="email" type="email" class="form-control">
          </div>
          <div class="form-group">
            <label> Password </label>
            <input v-model="password" type="password" class="form-control">
          </div>
          <input type="submit" class="btn btn-warning"  value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.dispatch('fetchUserInfo', data.access_token)
            .then(() => {
              this.$router.push('/dashboard')
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          const data = err.response.data
          const notification = {
            type: 'fail',
            title: 'Login Failed',
            msg: data.msg[0]
          }
          this.$store.commit('SET_NOTIFICATION', notification)
        })
    }
  }
}
</script>

<style>

</style>
