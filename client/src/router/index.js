import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "registerPage" */ '../views/RegisterPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "loginPage" */ '../views/LoginPage.vue')
  },
  {
    path: '/dashboard',
    name: 'userDashboard',
    component: () => import(/* webpackChunkName: "userDashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/dashboard/newpost',
    name: 'newPost',
    component: () => import(/* webpackChunkName: "newPost" */ '../views/NewPost.vue')
  },
  {
    path: '/dashboard/edit',
    name: 'editPost',
    component: () => import(/* webpackChunkName: "editPost" */ '../views/EditPost.vue')
  },
  {
    path: '/post/:postId',
    name: 'postDetail',
    component: () => import(/* webpackChunkName: "postDetail" */ '../views/PostDetail.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "landingPage" */ '../views/LandingPage.vue'),
    children: [
      {
        name: 'landingList',
        path: '/all',
        component: () => import(/* webpackChunkName: "all" */ '../components/LandingPageList.vue')
      },
      {
        name: 'landingList',
        path: '/:language',
        component: () => import(/* webpackChunkName: "landingList" */ '../components/LandingPageList.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
