<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  },
  created() {
    const token = localStorage.getItem("access_token");
    const activeUserId = localStorage.getItem("activeUserId");
    if (token && activeUserId) {
      this.$store.commit("SET_USER_CREDENTIALS", {
        token,
        activeUserId
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
