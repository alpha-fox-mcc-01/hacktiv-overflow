import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    isLogin: false,
    user: ''
  },
  mutations: {
    FETCH_QUESTION (state, payload) {
      state.questions = payload
    },
    SET_LOGIN_NAV (state, payload) {
      state.isLogin = payload
    },
    SET_USER_LOGIN (state, payload) {
      state.user = payload
    }
  },
  actions: {
    fetchQuestion (context) {
      axios({
        method: 'GET',
        url: 'http://apioverflow.gandasipayung.site/questions'
      })
        .then(({ data }) => {
          context.commit('FETCH_QUESTION', data)
        })
        .catch(_ => {
        })
    },
    isLoginNav (context, payload) {
      context.commit('SET_LOGIN_NAV', payload)
    },
    loginUser (context, payload) {
      context.commit('SET_USER_LOGIN', payload)
    }
  },
  modules: {
  }
})
