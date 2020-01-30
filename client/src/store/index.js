import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    answers: [],
    questionDetail: {}
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
    getAnswers (context, payload) {
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
    }
  },
  modules: {
  }
})
