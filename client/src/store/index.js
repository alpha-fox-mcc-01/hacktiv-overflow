import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: '',
    registerForm: false,
    loginForm: false,
    isLogin: false,
    questions: []
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
    },
    setIsLogin (state, data) {
      state.isLogin = data
    },
    setQuestions (state, data) {
      state.questions = data
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
      console.log('masuk ke act register')
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/user/register',
        data: data
      })
    },
    fetchQuestions (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/questions'
      })
        .then(({ data }) => {
          context.commit('setQuestions', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    postQuestion (context, data) {
      console.log(data, 'ini di dipatch')
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/questions',
        data,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
