import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterPage.vue')
  },
  {
    path: '/addQuestion',
    name: 'input question',
    component: () => import(/* webpackChunkName: "input question" */ '../views/InputForm.vue')
  },
  {
    path: '/profile',
    name: 'my profile',
    component: () => import(/* webpackChunkName: "my profile" */ '../views/MyProfile.vue')
  },
  {
    path: '/answer/:id',
    name: 'post answer',
    component: () => import(/* webpackChunkName: "post answer" */ '../components/PostAnswer.vue')
  },
  {
    path: '/:id',
    name: 'question details',
    component: () => import(/* webpackChunkName: "register" */ '../views/QuestionPage.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
