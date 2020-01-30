<template>
 <div class="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
  <div class="relative hidden xl:block xl:w-1/2 h-full">
    <img class="w-full object-cover" src="https://cdn.osxdaily.com/wp-content/uploads/2016/06/retro-terminal-mac-screenshots-1-610x419.jpg" alt="terminal image"/>
  </div>
  <div class="w-full xl:w-1/2 p-8">
    <form method="post" action="#" @submit.prevent="login">
      <h1 class=" text-2xl font-bold">Sign in to your account</h1>
      <span class="text-gray-600 text-sm">Don't have an account?</span>
      <a id="signup" href="/register" class="text-gray-700 text-sm font-semibold">Sign up
      </a>
      <div class="mb-4 mt-6">
        <label class="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
        <input class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10" id="email" type="text" placeholder="Your email address" v-model="email"/>
      </div>
      <div class="mb-6 mt-6">
        <label class="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
        <input class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10" id="password" type="password" placeholder="Your password" v-model="password"/>
      </div>
      <div class="flex w-full mt-8">
        <button class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10" type="submit">Sign in
        </button>
      </div>
    </form>
  </div>
 </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      let input = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userLogin', input)
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
#signup {
  cursor: pointer;
}

img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}

.container {
  margin-top: 2em;
}
</style>
