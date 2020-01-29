<template>
  <div id="app">
    <div id="nav">
      <n-navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navbarVue from './components/n-navbar'
export default {
  components: {
    'n-navbar': navbarVue
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
