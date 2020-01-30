<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        Logo Here
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add">Add Question</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">Sign In</router-link>
          </li>
          <li class="nav-item">
            <p @click="logout">Logout</p>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'base-navbar',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
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
