<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        Logo Here
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add">Add Question</router-link>
          </li>
        </ul>
        <div v-if="!isLogin">
          <router-link
          class="btn btn-outline-primary mx-4 my-2 my-sm-0"
          to="/login"
        >Log In</router-link>
        </div>
        <div v-else>
          <a>Login as : {{userLogin}}</a>
          <button
            class="btn btn-outline-danger mx-4 my-2 my-sm-0"
            @click="logout"
          >Log Out</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'base-navbar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    userLogin () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.dispatch('isLoginNav', false)
      this.$router.push('/login')
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.dispatch('isLoginNav', true)
    }
  }
}
</script>

<style scoped>
p {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 2rem;
  cursor: pointer;
}
</style>
