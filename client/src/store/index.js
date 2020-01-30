import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    fetchQuestion (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    fetchQuestion (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/questions'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('fetchQuestion', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
