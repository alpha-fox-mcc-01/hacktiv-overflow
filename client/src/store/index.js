import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2';
import axios from '../api/axiosInstance';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    errors: [],
    notification: '',
    questions: [],
    userQuestions: [],
    questionDetail: {},
    questionAnswers: [],
  },
  mutations: {
    SET_NOTIF(state, payload) {
      state.notification = payload;
    },
    SET_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },
    SET_USER_QUESTIONS(state, payload) {
      state.userQuestions = payload;
    },
    SET_QUESTION_DETAIL(state, payload) {
      state.questionDetail = payload;
    },
    SET_QUESTION_ANSWERS(state, payload) {
      state.questionAnswers = payload;
    },
  },
  actions: {
    register(context, payload) {
      return axios({
        method: 'POST',
        url: 'user/register',
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
        url: 'user/login',
        data: {
          email: payload.email,
          password: payload.password,
        },
      });
    },
    fetchAllQuestions(context) {
      axios({
        method: 'GET',
        url: 'question',
      })
        .then(({ data }) => {
          context.commit('SET_QUESTIONS', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchUserQuestions(context) {
      axios({
        method: 'GET',
        url: 'question/userQuestion',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then(({ data }) => {
          context.commit('SET_USER_QUESTIONS', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchOneQuestion(context, payload) {
      axios({
        method: 'GET',
        url: `question/${payload.questionId}`,
      })
        .then(({ data }) => {
          context.commit('SET_QUESTION_DETAIL', data);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.errors}`,
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
    fetchAnswers(context, payload) {
      axios({
        method: 'GET',
        url: `answer/${payload.questionId}`,
      })
        .then(({ data }) => {
          context.commit('SET_QUESTION_ANSWERS', data);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.errors}`,
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
    addQuestion(context, payload) {
      return axios({
        method: 'POST',
        url: 'question',
        data: {
          title: payload.title,
          content: payload.content,
        },
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
    },
    addAnswer(context, payload) {
      return axios({
        method: 'POST',
        url: `answer/${payload.questionId}`,
        data: {
          title: payload.title,
          content: payload.content,
        },
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
    },
    editQuestion(context, payload) {
      return axios({
        method: 'PUT',
        url: `question/${payload.questionId}`,
        data: {
          title: payload.title,
          content: payload.content,
        },
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
    },
    deleteQuestion(context, payload) {
      return axios({
        method: 'DELETE',
        url: `question/${payload.questionId}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
    },
    voteQuestion(context, payload) {
      return axios({
        method: 'PATCH',
        url: `question/${payload.questionId}`,
        data: {
          vote: payload.value,
        },
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
    },
    voteAnswer(context, payload) {
      return axios({
        method: 'PATCH',
        url: `answer/${payload.answerId}`,
        data: {
          vote: payload.value,
        },
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });
    },
  },
  modules: {
  },
});
