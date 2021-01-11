import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/modules/home/routes";

Vue.use(VueRouter);

const routes = [...home];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
