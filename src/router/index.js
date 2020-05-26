import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
    // {
    //   path: "/testvuex",
    //   name: "testvuex",
    //   component: () => import(/* webpackChunkName: "about" */ "../views/test-vuex.vue")
    // }
  ]
});

export default router;
