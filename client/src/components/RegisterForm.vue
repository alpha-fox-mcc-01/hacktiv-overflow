<template>
  <div class="">
    <div class="card">
      <div class="card-body">
        <h3>Join Hacktiv<strong>Overflow</strong></h3>
        <hr class="my-3">
        <form @submit.prevent="submitRegistration">
          <div class="form-group">
            <label> Full Name </label>
            <input v-model="name" type="text" class="form-control" required>
          </div>

          <div class="form-group">
            <label> Email </label>
            <input required v-model="email" type="text" class="form-control">
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-6">
                <label> Password </label>
                <input v-model="password" type="password" class="form-control">
              </div>
              <div class="col-6">
                <label> Confirm Password </label>
                <input v-model="passwordConfirm" type="password" class="form-control">
              </div>
            </div>
          </div>

          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="newsletter">
            <label class="custom-control-label" for="newsletter">Send me Newsletter</label>
          </div>
          <br>
          <div v-if="errors.length > 0" class="">
            <hr class="my-1"><br>
            <div class="alert-danger alert" v-for="(err, i) in errors" :key="i">{{err}}</div><br>
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
      name: '',
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      isMatch: true,
      errors: []
    }
  },
  methods: {
    submitRegistration () {
      if (this.password !== this.passwordConfirm) {
        this.isMatch = false
        this.password = ''
        this.passwordConfirm = ''
      } else {
        const payload = {
          username: this.username,
          password: this.password,
          name: this.name,
          email: this.email
        }
        this.$store.dispatch('registration', payload)
          .then(({ data }) => {
            console.log(data)
            this.$store.commit('SET_ACTIVEUSER', data)
            const notification = {
              type: 'success',
              title: 'Register Success',
              msg: 'you can login now'
            }
            this.$store.commit('SET_NOTIFICATION', notification)
            this.$router.push('/login')
          })
          .catch(err => {
            this.errors = err.response.data.msg
          })
      }
    }
  }
}
</script>

<style>

</style>
