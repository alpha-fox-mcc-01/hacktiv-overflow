import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    isLoginAction(context, payload) {
      context.commit('SET_IS_LOGIN', payload)
    }
  },
  modules: {
  }
})
