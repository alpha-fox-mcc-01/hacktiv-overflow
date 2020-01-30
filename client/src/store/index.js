import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeUser: null,
    unresolvedPosts: [],
    posts: [],
    activeNotification: null,
    editedPostId: ''
  },
  mutations: {
    SET_ACTIVEUSER (state, payload) {
      state.activeUser = payload
    },
    UNSET_ACTIVEUSER (state) {
      localStorage.clear()

      const notification = {
        type: 'success',
        title: 'Logged Out',
        msg: 'you are logged out of hacktiv overflow successfully'
      }
      state.activeNotification = notification
      state.activeUser = null
      router.push('/')
    },
    SET_NOTIFICATION (state, payload) {
      state.activeNotification = payload
    },
    UNSET_NOTIFICATION (state) {
      state.activeNotification = null
    },

    MAP_POSTS (state, posts) {
      console.log(posts, 'ini posts')
      state.posts = posts

      state.unresolvedPosts = posts.filter(post => !post.isResolved)
    },
    SET_EDITEDPOST (state, postId) {
      state.editedPostId = postId
    }
  },
  actions: {
    registration (context, payload) {
      return axios({
        url: '/auth/signup',
        method: 'POST',
        data: {
          password: payload.password,
          email: payload.email,
          name: payload.name
        }
      })
    },
    login (context, payload) {
      return axios({
        url: '/auth/signin',
        method: 'POST',
        data: {
          password: payload.password,
          email: payload.email
        }
      })
    },
    fetchUserInfo (context, accessToken) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/auth/verify',
          method: 'POST',
          headers: {
            'access_token': accessToken
          }
        })
          .then(({ data }) => {
            context.commit('SET_ACTIVEUSER', data)
            resolve()
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },

    submitPost (context, post) {
      return axios({
        method: 'POST',
        url: '/post/newpost',
        headers: {
          'access_token': localStorage.getItem('access_token')
        },
        data: {
          title: post.title,
          content: post.content,
          language: post.language
        }
      })
    },
    submitEditPost (context, post) {
      return axios({
        method: 'PUT',
        url: '/post/edit',
        headers: {
          'access_token': localStorage.getItem('access_token')
        },
        data: {
          postId: post.postId,
          title: post.title,
          content: post.content,
          language: post.language
        }
      })
    },

    fetchAll (context) {
      return axios({
        method: 'GET',
        url: '/post'
      })
    },
    fetchMyPost (context) {
      return axios({
        method: 'GET',
        url: '/post/mine',
        headers: {
          'access_token': localStorage.getItem('access_token')
        }
      })
    },
    fetchOne (context, postId) {
      return axios({
        method: 'GET',
        url: '/post/' + postId
      })
    },

    deletePost (context, postId) {
      return axios({
        method: 'DELETE',
        url: '/post',
        data: {
          postId: postId
        },
        headers: {
          'access_token': localStorage.getItem('access_token')
        }
      })
    },

    getComment (content, postId) {
      console.log('di store getComment', postId)
      return axios({
        method: 'GET',
        url: '/post/comment/' + postId,
        data: {
          postId: postId
        }
      })
    },
    submitComment (contect, payload) {
      return axios({
        method: 'POST',
        url: '/post/comment',
        data: {
          postId: payload.postId,
          comment: payload.comment
        },
        headers: {
          'access_token': localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
