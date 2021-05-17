<template>
  <div class="navbar flex items-center justify-between">
    <div>
      <router-link to="/">
        <h2 class="navbar-header text-white">Cryptotrade</h2>
      </router-link>
    </div>
    <div class="flex items-center" v-if="!isAuthenticated">
      <router-link to="/" class="mr-5 navbar-link">About Us</router-link>
      <router-link to="/" class="mr-5 navbar-link">Pricing</router-link>
      <router-link to="/login" class="btn-outline mr-5"> Login </router-link>
      <router-link to="/register" class="btn-primary"> Register </router-link>
    </div>
    <div class="flex items-center" v-else>
      <router-link
        class="mr-3 underline text-white"
        :to="{ name: 'dashboard' }"
      >
        Hi {{ this.firstName }}
      </router-link>
      <button class="btn-primary" @click="this.logout">Logout</button>
    </div>
  </div>
</template>
<script>
import localforage from "localforage";

export default {
  async created() {
    try {
      const firstName = await localforage.getItem("firstName");
      const isAuthenticated = await localforage.getItem("isAuthenticated");
      if (isAuthenticated && firstName) {
        this.firstName = firstName;
        this.isAuthenticated = isAuthenticated;
      }
    } catch (err) {
      this.error = "Something went wrong :(";
    }
  },
  data() {
    return {
      firstName: "",
      isAuthenticated: false,
      error: ""
    };
  },
  methods: {
    async logout() {
      await localforage.setItem("isAuthenticated", false);
      window.location.reload();
    }
  }
};
</script>
<style scoped>
.navbar-header {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
}

.navbar-link {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
}

.navbar {
  overflow-x: hidden;
}
</style>
