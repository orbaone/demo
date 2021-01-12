import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];
