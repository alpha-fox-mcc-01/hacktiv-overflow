import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    errors: [],
    notification: '',
  },
  mutations: {
    SET_NOTIF(state, payload) {
      state.notification = payload;
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    register(context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/user/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password,
        },
      });
    },
    login(context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/user/login',
        data: {
          email: payload.email,
          password: payload.password,
        },
      });
    },
  },
  modules: {
  },
});
