import Vue from "vue";
import App from "./App.vue";

import "@/plugins/vuelidate";
import "@/assets/css/index.css";

import router from "./router";
import dotenv from "dotenv";
import "./assets/tailwind.css";
dotenv.config();

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
