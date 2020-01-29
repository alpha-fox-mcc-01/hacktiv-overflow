<template>
  <mdb-navbar color="warning" light>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      Hacktiv Overflow
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <form>
        <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" @submit.prevent="search" label navInput waves waves-fixed/>
      </form>
        <mdb-nav-item to="/" href="#" active>Home</mdb-nav-item>
        <mdb-nav-item to="/about" href="#">About</mdb-nav-item>
        <mdb-nav-item to="/about" v-if="!currentUser" @click="callLogin">Login</mdb-nav-item>
        <mdb-nav-item to="/about" v-if="!currentUser" @click="callRegister">Register</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle v-if="currentUser" tag="a" navLink color="warning" slot="toggle" waves-fixed>{{currentUser}}</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Profile</mdb-dropdown-item>
            <mdb-dropdown-item @click.prevent="logout">Logout</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbInput, mdbDropdownItem } from 'mdbvue'
export default {
  name: 'NavbarPage',
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    }
  },
  methods: {
    logout () {
      console.log('Log out success')
      this.$store.commit('setCurrentUser', '')
      localStorage.clear()
    },
    search () {
      console.log('search data')
    },
    callLogin () {
      this.$store.commit('setLoginForm', true)
    },
    callRegister () {
      this.$store.commit('setRegisterForm', true)
    }
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput
  }
}
</script>
