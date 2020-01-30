<template>
  <nav class="navigation-bar d-flex container-fluid bg-dark text-white align-items-center">
    <div class="d-flex mr-auto align-items-center">
      <router-link :to="'/general'" class="text-white" style="text-decoration: none">
        <div class="d-flex brand ">
          <i class="fas fa-layer-group fa-2x mr-2"></i>
          <div class="title">Hacktiv <b>Overflow</b></div>
        </div>
      </router-link>

      <router-link v-if="activeUser" :to="'/dashboard'" class="ml-4 text-white" style="text-decoration: none">
        <div class="">Dashboard</div>
      </router-link>
    </div>

    <div v-if="!activeUser">
      <router-link :to="'/login'">
        <button class="btn btn-outline-warning mr-3">Log in</button>
      </router-link>
      <router-link :to="'/register'">
        <button class="btn btn-warning">Register</button>
      </router-link>
    </div>
    <div v-else class="brand" @click="logout">
      <i class="fas mr-2 fa-power-off"></i>
      <span>Log out</span>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    activeNotification: 'activeNotification',
    activeUser: 'activeUser'
  }),
  methods: {
    logout () {
      this.$store.commit('UNSET_ACTIVEUSER')
    }
  }
}
</script>

<style>

.brand {
  cursor: pointer;
}
.navigation-bar{
  box-sizing: border-box;
  border-top:3px solid darkorange;
  padding: 1em 2em;
}
.title {
  font-size: 1.4rem;
}
</style>
