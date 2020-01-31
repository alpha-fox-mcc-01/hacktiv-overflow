import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: '',
    currentUserId: '',
    registerForm: false,
    loginForm: false,
    isLogin: false,
    questions: [],
    oneQuestion: {}
  },
  mutations: {
    setCurrentUser (state) {
      state.currentUser = localStorage.getItem('name')
      state.currentUserId = localStorage.getItem('userId')
    },
    currentUserLogout (state) {
      state.currentUser = ''
      state.currentUserId = ''
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
    },
    setOneQuestion (state, data) {
      state.oneQuestion = data
    }
  },
  actions: {
    login (context, data) {
      return axios({
        method: 'POST',
        url: 'http://api-hacktiv-overflow.nafies.tech/user/login',
        data: data
      })
    },
    register (context, data) {
      return axios({
        method: 'POST',
        url: 'http://api-hacktiv-overflow.nafies.tech/user/register',
        data: data
      })
    },
    fetchQuestions (context) {
      axios({
        method: 'GET',
        url: 'http://api-hacktiv-overflow.nafies.tech/questions'
      })
        .then(({ data }) => {
          context.commit('setQuestions', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    fetchOneQuestion (context, data) {
      axios({
        method: 'GET',
        url: `http://api-hacktiv-overflow.nafies.tech/questions/${data}`
      })
        .then(({ data }) => {
          context.commit('setOneQuestion', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    postQuestion (context, data) {
      return axios({
        method: 'POST',
        url: 'http://api-hacktiv-overflow.nafies.tech/questions',
        data,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    fetchAnswers (context, data) {
      return axios({
        method: 'GET',
        url: 'http://api-hacktiv-overflow.nafies.tech/answers',
        headers: { questionid: data }
      })
    },
    postAnswer (context, { data, questionId }) {
      return axios({
        method: 'POST',
        url: 'http://api-hacktiv-overflow.nafies.tech/answers/' + questionId,
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
