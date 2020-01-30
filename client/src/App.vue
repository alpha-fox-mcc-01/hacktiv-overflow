<template>
  <div id="app">
    <BaseNavbar />
    <div class="mt-5 pt-3 container">
      <router-view />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import BaseNavbar from './components/BaseNavbar'
import BaseFooter from './components/BaseFooter'
export default {
  name: 'App',
  components: {
    BaseNavbar,
    BaseFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 2rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.mt-5 {
  min-height: 100vh;
}
</style>
