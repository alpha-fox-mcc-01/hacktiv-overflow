<template>
  <div id='navbar-div'>
    <b-navbar toggleable="sm" type="light" variant="transparent">
      <b-navbar-brand @click="$router.push('/')" style='cursor: pointer !important;'><img src='../../public/chaticon.png' width=40 height=40>&nbsp;Hacktiv-Overflow&nbsp;</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/')">&nbsp;Feed</b-nav-item>
          <b-nav-item @click="$router.push('/discover')">Discover</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent='searchQuestions'>
            <b-form-input v-model='keyword' size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
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
            <div v-if='!isLogin'>
              <b-dropdown-item @click="$router.push('/signin')">Sign In</b-dropdown-item>
              <b-dropdown-item @click="$router.push('/signup')">Sign Up</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    searchQuestions () {
      this.$store.dispatch('getQuestions', this.keyword)
    },
    signOut() {
      this.$store.commit('SET_LOGIN', false)
      localStorage.removeItem('access_token')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (localStorage.getItem('access_token')) this.$store.commit('SET_LOGIN', true)
    else this.$store.commit('SET_LOGIN', false)
  }
}
</script>

<style scoped>
#navbar-div {
  border-bottom: solid lightgray;
  border-width: thin;
}
.btn-secondary {
  color: #fff;
  background-color: rgb(89, 0, 255);
  border-color: rgb(89, 0, 255);
  opacity: 1 !important;
}
.btn-secondary:hover{
  background-color: rgb(110, 0, 255);
  border-color: rgb(110, 0, 255);
  opacity: 0.5;
  transition: .7s ease;
}

.form-inline .form-control {
  display: inline-block;
  width: 40rem;
  vertical-align: middle;
}
</style>
