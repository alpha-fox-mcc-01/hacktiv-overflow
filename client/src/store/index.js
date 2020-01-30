import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: '',
    registerForm: false,
    loginForm: false
  },
  mutations: {
    setCurrentUser (state, data) {
      state.currentUser = data
    },
    setRegisterForm (state, data) {
      state.registerForm = data
    },
    setLoginForm (state, data) {
      state.loginForm = data
    }
  },
  actions: {
    login (context, data) {
      console.log('masuk ke act login')
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/user/login',
        data: data
      })
    },
    register (context, data) {
      console.log('masuk ke register')
      context.commit('setCurrentUser', data.name)
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/user/register',
        data: data
      })
    }
  },
  modules: {
  }
})
