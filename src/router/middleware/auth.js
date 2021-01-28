import localforage from "localforage";
const authMiddleware = async (to, from, next) => {
  // If Not logged in, redirect to login, otherwise redirect to dashboard
  if (to.meta.guest) {
    //Check localstorage for auth
    try {
      const isAuthenticated = await localforage.getItem("isAuthenticated");
      if (isAuthenticated) {
        if (to.name === "login" || to.name === "register") {
          next({ name: "dashboard" });
        } else {
          next();
        }
      } else {
        next();
      }
    } catch (error) {
      next({ name: "login" });
    }
  } else if (to.meta.authRequired) {
    try {
      const isAuthenticated = await localforage.getItem("isAuthenticated");
      if (isAuthenticated) {
        next();
      } else {
        next({ name: "login" });
      }
    } catch (error) {
      next({ name: "login" });
    }
  } else {
    next();
  }
};

export default authMiddleware;
