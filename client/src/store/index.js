import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    answers: [],
    questionDetail: {},
    tags: [],
    isLogin: false,
    isViewing: false
  },
  mutations: {
    SET_QUESTIONS (state, payload) {
      state.questions = payload
    },
    SET_ANSWERS (state, payload) {
      state.answers = payload
    },
    SET_QUESTION_DETAIL (state, payload) {
      state.questionDetail = payload
    },
    SET_TAGS (state, payload) {
      state.tags = payload
    },
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_VIEW (state, payload) {
      state.isViewing = payload
    }
  },
  actions: {
    getQuestions (context, payload) {
      let url = 'http://localhost:3000/questions'
      if (payload) url += `/?keyword=${payload}`
      axios({
        method: 'GET',
        url
      })
        .then(({ data }) => {
          context.commit('SET_QUESTIONS', data)
        })
        .catch(err => {
          console.log(err.message)
        })
    },
    getQuestionAnswers (context, payload) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/answers/?questionId=${payload}`
      })
        .then(({ data }) => {
          context.commit('SET_ANSWERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getQuestionDetail (context, payload) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/questions/${payload}`
      })
        .then(({ data }) => {
          context.commit('SET_QUESTION_DETAIL', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getTags (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/questions/tags'
      })
        .then(({ data }) => {
          context.commit('SET_TAGS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    newAnswer (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/answers/?questionId=' + payload._id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: payload.title,
          description: payload.description
        }
      })
    },
    voteQuestion (context, payload) {
      return axios({
        method: 'PATCH',
        url: `http://localhost:3000/questions/${payload._id}/vote`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          value: payload.value
        }
      })
    },
    voteAnswer (context, payload) {
      return axios({
        method: 'PATCH',
        url: `http://localhost:3000/answers/${payload._id}/vote`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          value: payload.value
        }
      })
    },
    signUp (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/users/signup',
        data: payload
      })
    },
    signIn (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/users/signin',
        data: payload
      })
    }
  },
  modules: {
  }
})
