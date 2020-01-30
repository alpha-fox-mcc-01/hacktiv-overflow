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
    },

    addPost(context, formData) {
      return axios
        .post(process.env.VUE_APP_BASE_API_URL + "qna/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "access_token": this.state.access_token
          }
        })
    },

    addPostWithoutPic(context, post) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/post/wopic',
        data: {
          title: post.title,
          body: post.body,
          category: post.category,
          UserId: post.UserId
        },
        headers: {
          "access_token": this.state.access_token
        }
      })
    },

    addReply(context, reply) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/answer',
        data: {
          body: reply.body,
          UserId: reply.UserId,
          PostId: reply.PostId
        },
        headers: {
          "access_token": this.state.access_token
        }
      })
    },

    addAnswer(context, answer) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/post/answer',
        data: {
          postId: answer.postId,
          answerId: answer.answerId
        },
        headers: {
          "access_token": this.state.access_token
        }
      })
    },

    findOneUser(context, id) {
      return axios({
        method: 'get',
        url: process.env.VUE_APP_BASE_API_URL + 'user/' + id,
      })
    },

    addVote(context, vote) {
      return axios({
        method: 'post',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/post/vote',
        data: {
          postId: vote.postId,
          votersId: vote.votersId,
          type: vote.type
        },
        headers: {
          "access_token": this.state.access_token
        }
      })
    },

    deletePost(context, id) {
      return axios({
        method: 'delete',
        url: process.env.VUE_APP_BASE_API_URL + 'qna/post/' + id,
        headers: {
          "access_token": this.state.access_token
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
