<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-white shadow mb-3 p-1">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <img
      src="https://developer.android.com/guide/practices/ui_guidelines/images/NB_Icon_Mask_Shapes_Ext_02.gif"
      style="max-width: 50px"
    />
    <h5 class="mt-2 mx-3">
      <strong>Hacktiv-Git</strong>
    </h5>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Public questions</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My questions</a>
        </li>
      </ul>
      <router-link
        class="btn btn-outline-primary mx-4 my-2 my-sm-0"
        to="/login"
        v-if="!isLogin"
      >Sign In</router-link>
      <button
        class="btn btn-outline-danger mx-4 my-2 my-sm-0"
        v-if="isLogin"
        @click="logout"
      >Sign Out</button>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: `Navbar`,
  data() {
    return {};
  },
  methods: {
    logout() {
      if (localStorage.getItem(`token`)) {
        localStorage.removeItem(`token`);
        Swal.fire("logout successfully", "", "success");
        this.$store.dispatch("isLoginAction", false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Did you already login?",
        });
      }
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  }
};
</script>

<style scoped>
</style>