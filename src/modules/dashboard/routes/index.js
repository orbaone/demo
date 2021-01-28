import Dashboard from "../pages/Dashboard.vue";

export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      authRequired: true
    }
  }
];
