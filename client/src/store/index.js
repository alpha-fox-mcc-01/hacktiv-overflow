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
      console.log('masuk ke act login')
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/user/login',
        data: data
      })
    },
    register (context, data) {
      console.log('masuk ke act register')
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/user/register',
        data: data
      })
    },
    fetchQuestions (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3001/questions'
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
        url: `http://localhost:3001/questions/${data}`
      })
        .then(({ data }) => {
          context.commit('setOneQuestion', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    postQuestion (context, data) {
      console.log(data, 'ini di dipatch')
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/questions',
        data,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    fetchAnswers (context, data) {
      console.log('masuk fetch act answers', data)
      return axios({
        method: 'GET',
        url: 'http://localhost:3001/answers',
        headers: { questionid: data }
      })
    },
    postAnswer (context, { data, questionId }) {
      console.log(data, 'ini di dispatch')
      return axios({
        method: 'POST',
        url: 'http://localhost:3001/answers/' + questionId,
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
