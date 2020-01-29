<template>
  <mdb-container>
    <mdb-modal :show="register" @close="setRegister(false)">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Register</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text text-left">
        <mdb-input label="Your name" icon="user" class="mb-5"/>
        <mdb-input label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" icon="lock" type="password"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="setRegister(false)" color="deep-orange">Register</mdb-btn>
      </mdb-modal-footer>
      <p class="font-small grey-text">Have an account? <a @click.prevent="toLogin" class="blue-text ml-1">Login</a> here</p>
    </mdb-modal>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput } from 'mdbvue'
export default {
  name: 'registerPage',
  components: {
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbInput
  },
  computed: {
    register () {
      return this.$store.state.registerForm
    }
  },
  methods: {
    setLogin (status) {
      this.$store.commit('setLoginForm', status)
    },
    setRegister (status) {
      this.$store.commit('setRegisterForm', status)
    },
    toLogin () {
      this.setRegister(false)
      this.setLogin(true)
    }
  }
}
</script>
