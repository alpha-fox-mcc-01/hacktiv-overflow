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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/question',
    name: 'question',
    component: Home
  },
  {
    path: '/question/addpost',
    name: 'add-question',
    component: () => import(/* webpackChunkName: "details" */ '../views/PostQuestion.vue')
  },
  {
    path: '/question/:id',
    name: 'question',
    component: () => import(/* webpackChunkName: "details" */ '../views/QuestionDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
