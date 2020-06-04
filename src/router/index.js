import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: "/",
      name: "test",
      component: () => import(/* webpackChunkName: "about" */ "../views/test")
    },
    {
      path: "/xx",
      name: "home",
      component: () => import(/* webpackChunkName: "about" */ "../views/Home")
    },
    {
      path: "/whyChoose",
      name: "whyChoose",
      component: () => import(/* webpackChunkName: "about" */ "../views/WhyChoose.vue")
    },
    {
      path: "/help",
      name: "help",
      component: () => import(/* webpackChunkName: "about" */ "../views/Help")
    },
    {
      path: "/dealFun",
      name: "dealFun",
      component: () => import(/* webpackChunkName: "about" */ "../views/DealFun")
    },
    {
      path: "/product",
      name: "product",
      component: () => import(/* webpackChunkName: "about" */ "../views/Product")
    },
    {
      path: "/soft",
      name: "soft",
      component: () => import(/* webpackChunkName: "about" */ "../views/Product")
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "*",
      name: "*",
      component: () => import(/* webpackChunkName: "about" */ "../views/404.vue")
    }
  ]
});

export default router;
