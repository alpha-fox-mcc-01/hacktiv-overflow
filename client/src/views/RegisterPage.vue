<template>
<div class="bg-grey-lighter min-h-screen flex flex-col">
  <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <h1 class="mb-8 text-3xl text-center">Sign up</h1>
      <form @submit.prevent="register">
      <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="username" placeholder="Username" v-model="username" />
      <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" v-model="email" />
      <input type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" v-model="password" />
      <button type="submit" class="w-full text-center rounded bg-black text-white hover:bg-blue">Create Account</button>
      </form>
    </div>

    <div class="text-grey-dark mt-6">Already have an account?>
    <a class="no-underline border-b border-blue text-blue" href="/login">Log in</a>.
    </div>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'RegisterPage',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      let input = {
        email: this.email,
        password: this.password,
        username: this.username
      }
      this.$store.dispatch('userRegister', input)
        .then(({ data }) => {
          Swal.fire('Yay!', 'Registration successful. Login to continue', 'success')
          this.$router.push('/login')
        })
        .catch(err => {
          Swal.fire('Oops..', 'An error occured. Please try again', 'error')
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style scoped>
div {
  margin: auto;
}

</style>
