import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/post/:id",
    name: "post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PostDetail.vue"),
    // children: [
    //   {
    //     path: 'login',
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "../components/Login.vue")
    //   },
    //   {
    //     path: 'register',
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "../components/Register.vue")
    //   }
    // ]
  },
  {
    path: "/:notexist",
    component: Home
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
