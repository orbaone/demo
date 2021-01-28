import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/modules/home/routes";
import auth from "@/modules/auth/routes";
import dashboard from "@/modules/dashboard/routes";
import middleware from "@/router/middleware/auth";

Vue.use(VueRouter);

const routes = [...home, ...auth, ...dashboard];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(middleware);

export default router;
