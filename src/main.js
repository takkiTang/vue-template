import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "@/api";
import "./plugins";
import "@/styles/common.scss";

Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
