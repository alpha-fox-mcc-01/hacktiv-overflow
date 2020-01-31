<template>
  <div id="nav">
    <nav class="navbar navbar-light bg-light justify-content-start">
      <div class="container">
        <router-link class="nav-link" to="/">
          <i class="fas fa-expand-arrows-alt pr-2"></i>Overflow
        </router-link>
        <router-link class="nav-link" to="/question">Questions</router-link>
        <router-link
        class="nav-link"
        to="/myquestion"
        v-if="isLogin"
        >My Questions</router-link>
        <router-link
          class="nav-link ml-auto"
          to="/login"
          v-if="!isLogin"
        >Sign In</router-link>
        <span
          class="nav-link pointer span-hover ml-auto"
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
