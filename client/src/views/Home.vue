<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '../components/HelloWorld'
export default {
  name: 'home',
  components: {
    Home
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
