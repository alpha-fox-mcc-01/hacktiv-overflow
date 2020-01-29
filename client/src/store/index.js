import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: 'nafies',
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
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: data
      })
    }
  },
  modules: {
  }
})
