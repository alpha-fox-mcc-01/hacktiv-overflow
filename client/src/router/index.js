import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Questions from '../views/Questions.vue'
import AddQuestion from '../views/AddQuestion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users/register',
    name: 'register',
    component: Register
  },
  {
    path: '/users/login',
    name: 'login',
    component: Login
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions
  },
  {
    path: '/questions/post',
    name: 'addQuestion',
    component: AddQuestion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
