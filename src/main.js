import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GlobalDirective from "./directive";
import Api from "./api";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import DrawerLayout from "vue-drawer-layout";
import "@style/font-awesome.min.css";
Vue.use(DrawerLayout);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

GlobalDirective(Vue);

Vue.prototype.$Api = Api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
