<template>
  <div class="flex p-5 justify-between items-center container mx-auto">
    <div>
      <router-link to="/">
        <img class="h-10 mx-auto mb-4" src="@/assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="flex items-center" v-if="!isAuthenticated">
      <router-link to="/" class="mr-3">Home</router-link>
      <p class="mr-3 opacity-50">Destination</p>
      <p class="mr-3 opacity-50">About</p>
      <p class="mr-5 opacity-50">Partner</p>
      <router-link
        to="/login"
        class="px-3 py-2 border-2 border-orange-400 rounded text-orange-400 mr-4"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="px-3 py-2 border-2 border-orange-400 rounded bg-orange-400 text-white"
      >
        Register
      </router-link>
    </div>
    <div class="flex items-center" v-else>
      <router-link
        class="text-gray-800 mr-3 underline"
        :to="{ name: 'dashboard' }"
      >
        Hi {{ this.firstName }}
      </router-link>
      <p class="text-orange-500 font-bold cursor-pointer" @click="this.logout">
        Logout
      </p>
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
