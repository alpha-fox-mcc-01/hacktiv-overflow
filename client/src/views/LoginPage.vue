<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-7 text-center">
        <i class="fas fa-layer-group fa-3x"></i>
        <div class="title mb-3">Hacktiv <b>Overflow</b></div>
        <LoginForm/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import { mapState } from 'vuex'
export default {
  computed: mapState({
    activeUser: 'activeUser'
  }),
  components: {
    LoginForm
  }
}
</script>

<style>

</style>
