<template>
  <div>
    <Login />
    <b-navbar class="bar">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>

      <!-- Navbar dropdowns -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button class="myButton" v-b-modal.LoginModal>Login</b-button>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import Login from "@/components/LoginModal";

export default {
  components: {
    Login
  }
};
</script>

<style scoped>
.bar {
  background-color: white;
  border-bottom: 3px solid coral;
  font-weight: 700;
  height: 8vh;
}
</style>
