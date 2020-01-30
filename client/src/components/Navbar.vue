<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Feed</b-nav-item>
          <b-nav-item href="#">Discover</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown toggle-class="text-dark" text="Display" right>
            <b-dropdown-item href="#">Bright</b-dropdown-item>
            <b-dropdown-item href="#">Normal</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown toggle-class="text-dark" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
            <b-dropdown-item href="#">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.form-inline .form-control {
  display: inline-block;
  width: 40rem;
  vertical-align: middle;
}
.b-form-input {
  width: 10rem;
}
.navbar-dark .navbar-brand {
  color: #121212;
}
.navbar-dark .navbar-nav .nav-link {
  color: #121212;
}
</style>
