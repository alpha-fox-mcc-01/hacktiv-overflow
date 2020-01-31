import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/myquestion',
    name: 'myquestion',
    component: () => import(/* webpackChunkName: "login" */ '../views/UserQuestion.vue'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "DetailQuestion" */ '../components/FormEdit.vue'),
      },
    ],
  },
  {
    path: '/question',
    name: 'question',
    component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "DetailQuestion" */ '../components/ListQuestion.vue'),
      }, {
        path: 'add',
        component: () => import(/* webpackChunkName: "DetailQuestion" */ '../components/FormQuestion.vue'),
      }, {
        path: ':id',
        component: () => import(/* webpackChunkName: "DetailQuestion" */ '../components/DetailQuestion.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
