import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: 'nafies'
  },
  mutations: {
    setCurrentUser (state, data) {
      state.currentUser = data
    }
  },
  actions: {
  },
  modules: {
  }
})
