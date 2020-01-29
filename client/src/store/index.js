import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    answers: [],
    access_token: '',
    activeUserId: ''
  },
  mutations: {
    SET_QUESTIONS(state, data) {
      state.questions = data
    },
    SET_ANSWERS(state, data) {
      state.answers = data
    },
    SET_USER_CREDENTIALS(state, data) {
      state.access_token = data.token
      state.activeUserId = data.activeUserId
    }
  },
  actions: {
    fetchQuestions(context) {
      axios({
        method: 'get',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/post'
      })
        .then(({ data }) => {
          context.commit('SET_QUESTIONS', data)
        })
    },

    fetchAnswers(context) {
      axios({
        method: 'get',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/answer'
      })
        .then(({ data }) => {
          context.commit('SET_ANSWERS', data)
        })
    },

    fetchOneQuestion(context, id) {
      return axios({
        method: 'get',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/post/' + id
      })
    },

    loginUser(context, user) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASE_API_URL + 'user/login',
        data: {
          email: user.email,
          password: user.password
        }
      })
    },

    registerUser(context, user) {

      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASE_API_URL + 'user/register',
        data: {
          email: user.email,
          password: user.password
        }
      })
    }
  },
  getters: {
    getFrondEnd(state) {
      return state.questions.filter(q => q.category === 'frontend')
    },
    getBackEnd(state) {
      return state.questions.filter(q => q.category === 'backend')
    }
  },
  modules: {}
});
