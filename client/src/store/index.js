import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allQuestions:[],
    currentQue:{},
    currentAnswer:[],
    myQuestions:[],
    onUpdate: false,
    myAnswers:[]
  },
  mutations: {
    setQuestions(state, payload){
      // console.log('mutation getque ketembak');
      // console.log(payload);
      
      state.allQuestions = payload
    },
    setCurrentQue(state, payload){
      state.currentQue = payload
    },
    setCurrentAnswer(state, payload){
      // console.log(payload, 'current answer di set');
      state.currentAnswer = payload
    },
    setMyquestions(state, payload){
      // console.log('sampe ke set my questions', payload);
      
      state.myQuestions = payload
    },
    setonUpdate(state, payload){
      state.onUpdate = payload
      console.log('masuk', state.onUpdate);
      // if(state.onUpdate === true){
      //   state.onUpdate = false
      // }else{
      //   state.onUpdate = true
      // }
      // state.onUpdate = payload
    },
    setMyanswers(state, payload){
      console.log('sampe mutation');
      
      state.myAnswers = payload
    }
  },
  actions: {
    getQuestions(context){
      // console.log('get que ketembak');
      
      axios({
        method: "get",
        url: "/question/",
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
         context.commit('setQuestions', data)
        })
        .catch(err => {
         
          console.log(err);
        });
    },
    getCurrentQue(context, id){
      // console.log(id, 'ini id getoneque');
      
      axios({
        method: "get",
        url: `/question/${id}`,
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
         context.commit('setCurrentQue', data)
        })
        .catch(err => {
         
          console.log(err);
        });
    },
    getCurrentAnswer(context,id){
      // console.log(id, 'current answer ketembak');

      axios({
        method: "get",
        url: `/answer/${id}`,
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
         context.commit('setCurrentAnswer', data)
        })
        .catch(err => {
         
          console.log(err);
        });
    },
    getMyQuestions(context){
      axios({
        method: "get",
        url: `/question/user`,
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          // console.log('sampe siniii', data);
          
         context.commit('setMyquestions', data)
        })
        .catch(err => {
         
          console.log(err);
        });
    },
    getMyAnswer(context){
      axios({
        method: "get",
        url: `answer/myAnswer/`,
        headers:{
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log('sampe siniii', data);
          
         context.commit('setMyanswers', data)
        })
        .catch(err => {
         
          console.log(err);
        });
    }
  },
  modules: {
  }
})
