<template>
  <div id="nav">
    <nav class="navbar navbar-light bg-light justify-content-start">
      <div class="container">
        <router-link class="nav-link" to="/">
          <i class="fas fa-expand-arrows-alt pr-2"></i>Overflow
        </router-link>
        <router-link class="nav-link" to="/post">Posts</router-link>
        <router-link
          class="nav-link ml-auto"
          to="/login"
          v-if="!isLogin"
        >Sign In</router-link>
        <span
          class="nav-link ml-auto"
          v-if="isLogin"
        >Hello, {{ userName }}
        </span>
        <span
          class="nav-link pointer span-hover"
          v-if="isLogin"
          @click="logOut"
        >Sign Out</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    userName() {
      return localStorage.getItem('userName');
    },
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$store.commit('SET_ISLOGIN', false);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.span-hover:hover {
  cursor: pointer;
  color: #42b983 !important;
}
</style>
