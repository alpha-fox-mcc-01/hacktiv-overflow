import Vue from 'vue'
import Vuex from 'vuex'
import instance from '@/config/axios.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: ''
  },
  mutations: {
    SET_STATUS (state, payload) {
      state.isLoggedIn = payload
    }
  },
  actions: {
    userLogin (context, payload) {
      instance.post('/users/login', {
        email: payload.email,
        password: payload.password
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('SET_STATUS', true)
          Swal.fire('Welcome back!', 'You have successfully logged in', 'success')
        })
        .catch(err => {
          console.log(err)
          Swal.fire('Oops..', 'Username/password wrong', 'error')
        })
    },
    userRegister (context, payload) {
      return instance.post('/users/register', {
        email: payload.email,
        password: payload.password
      })
    }
  },
  modules: {
  }
})
