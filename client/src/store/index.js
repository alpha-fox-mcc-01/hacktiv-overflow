import Vue from 'vue'
import Vuex from 'vuex'
import instance from '@/config/axios.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: '',
    questions: [],
    answers: [],
    myQuestions: [],
    myAnswers: []
  },
  mutations: {
    SET_STATUS (state, payload) {
      state.isLoggedIn = payload
    },
    SET_QUESTIONS (state, payload) {
      state.questions = payload
    },
    SET_ANSWERS (state, payload) {
      state.answers = payload
    },
    SET_MY_QUESTIONS (state, payload) {
      state.myQuestions = payload
    },
    SET_MY_ANSWERS (state, payload) {
      state.myAnswers = payload
    }  
  },
  actions: {
    userLogin (context, payload) {
      instance.post('/users/login', {
        email: payload.email,
        password: payload.password
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('SET_STATUS', true)
          Swal.fire('Welcome back!', 'You have successfully logged in', 'success')
        })
        .catch(err => {
          console.log(err)
          Swal.fire('Oops..', 'Username/password wrong', 'error')
        })
    },
    userRegister (context, payload) {
      return instance.post('/users/register', {
        email: payload.email,
        password: payload.password,
        username: payload.username
      })
    },
    fetchQuestions (context, payload) {
      instance.get('/questions')
          .then(({ data }) => {
            context.commit('SET_QUESTIONS', data.result)
          })
          .catch( err  => {
            console.log(err)
          })
    },
    getDetails (context, payload) {
      console.log(payload, '<><><><>')
      instance.get('/answers/' + payload)
              .then(({ data }) => {
                context.commit('SET_ANSWERS', data.result)
              })
              .catch(err => {
                console.log(err)
              })
    },
    voteAnswer (context, payload) {
      return instance.patch('/answers/' + payload.id, {
        value: payload.value
      })
    },
    voteQuestion (context, payload) {
      return instance.patch('/questions/' + payload.id, {
        value: payload.value
      })
    },
    postQuestion (context, payload) {
      return instance.post('/questions', {
        title: payload.title,
        content: payload.content
      })
    },
    postAnswer (context, payload) {
      return instance.post('/answers/' + payload.id , {
        title: payload.title,
        content: payload.content
      })
    },
    fetchMyQuestions (context, payload) {
      instance.get('/questions/me')
              .then(({ data }) => {
                context.commit('SET_MY_QUESTIONS', data.result)
              })
              .catch(err => {
                console.log(err)
              })
    },
    fetchMyAnswers (context, payload) {
      instance.get('/answers/me')
              .then(({ data }) => {
                context.commit('SET_MY_ANSWERS', data.result)
              })
              .catch(err => {
                console.log(err)
              })
    },
    deleteAnswer (context, payload) {
      return instance.delete('/answers/' + payload)
              
    }
  },
  modules: {
  }
})
