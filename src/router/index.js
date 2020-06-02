import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "about" */ "../views/Home")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

export default router;
