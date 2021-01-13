<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div>
      <p class="absolute right-0 bottom-0 mb-4 mr-4">v{{ version }}</p>
    </div>
    <navbar />
    <div class="flex flex-grow w-full items-center container mx-auto">
      <div class="w-1/2">
        <h1 class="text-6xl font-serif text-gray-800">
          Explore and <br />Fake Travel
        </h1>
        <p class="text-gray-800 mb-10 mt-4">
          Welcome to Orba's own fake travel company demo. <br />This shows what
          Orba One's integration might look like. <br />Try creating an account
          and verifying your identity.
        </p>
        <router-link
          to="/login"
          class="px-5 py-2 border-2 border-orange-400 rounded text-orange-400 mr-4"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          class="px-5 py-2 border-2 border-orange-400 rounded bg-orange-400 text-white"
        >
          Register
        </router-link>
      </div>
      <div class="w-1/2">
        <img src="@/assets/hero.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";

import Navbar from "@/components/Navbar.vue";

const pkg = require("../../../../package.json");

export default {
  name: "App",
  components: {
    navbar: Navbar
  },
  data() {
    return {
      version: `${pkg.version}-${process.env.NODE_ENV}`,
      isApplicantCreated: false,
      firstName: "",
      middleName: "",
      lastName: ""
    };
  },
  validations: {
    firstName: {
      required
    },
    middleName: {
      required
    },
    lastName: {
      required
    }
  }
};
</script>
