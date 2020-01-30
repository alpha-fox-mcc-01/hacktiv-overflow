<template>
  <mdb-container>
    <mdb-modal :show="login" @close="setLogin(false)">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Login</mdb-modal-title>
      </mdb-modal-header>
      <mdb-alert color="danger">
      {{alert}}
    </mdb-alert>
      <mdb-modal-body class="mx-3 grey-text" style="text-align: left;">
        <mdb-input label="Your email" v-model="email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input label="Your password" v-model="password" icon="lock" type="password"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="toLogin">Login</mdb-btn>
      </mdb-modal-footer>
      <p class="font-small grey-text">Dont have an account? <a @click.prevent="toRegister" class="blue-text ml-1">Register</a> here</p>
    </mdb-modal>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbBtn, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput, mdbModalTitle } from 'mdbvue'
export default {
  name: 'loginPage',
  data () {
    return {
      email: '',
      password: '',
      alert: ''
    }
  },
  components: {
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbInput,
    mdbModalTitle
  },
  computed: {
    login () {
      return this.$store.state.loginForm
    }
  },
  methods: {
    toLogin () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
        .then(({ data }) => {
          this.setLogin(false)
          console.log('masuk ke login')
          console.log(data)
          this.$store.commit('setCurrentUser', data.name)
          this.email = ''
          this.password = ''
        })
        .catch(err => {
          console.log(err.response)
          this.alert = err.response.data.error
          setTimeout(() => {
            this.alert = ''
          }, 3000)
        })
    },
    setLogin (status) {
      this.$store.commit('setLoginForm', status)
    },
    setRegister (status) {
      this.$store.commit('setRegisterForm', status)
    },
    toRegister () {
      this.setLogin(false)
      this.setRegister(true)
    }
  }
}
</script>
