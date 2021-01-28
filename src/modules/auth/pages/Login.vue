<template>
  <div>
    <navbar />
    <form
      class="flex flex-col flex-grow p-4 justify-center  w-full max-w-md mx-auto"
      @submit.prevent="submitForm"
    >
      <div class="flex flex-col mt-4">
        <p class="text-4xl mt-3 text-gray-800 font-bold font-serif">
          Welcome back,
        </p>
        <p class="text-4xl mt-3 mb-3 text-gray-800 font-bold font-serif">
          Log into Fake Travel
        </p>
        <p v-if="error" class="form-error font-bold text-sm my-3">
          {{ error }}
        </p>
        <label for="email" class="text-sm text-gray-700">Email</label>
        <input
          v-model="$v.loginForm.email.$model"
          class="input"
          type="text"
          name="email"
          autofocus
          data-testid="login-email-input"
          placeholder="admin@example.com"
        />
        <div v-if="$v.loginForm.email.$error">
          <p v-if="$v.loginForm.email.$invalid" class="form-error">
            The email entered is invalid
          </p>
          <p v-else-if="$v.loginForm.email.required" class="form-error">
            Please enter an email
          </p>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <label for="password" class="text-sm text-gray-700">Password</label>
        <input
          v-model="$v.loginForm.password.$model"
          class="input"
          type="password"
          name="password"
          data-testid="login-password-input"
          placeholder="Password"
        />
        <div v-if="$v.loginForm.password.$error">
          <p v-if="$v.loginForm.password.required" class="form-error">
            Please enter your password
          </p>
        </div>
      </div>
      <button
        :disabled="this.$v.loginForm.$invalid"
        class="px-5 py-2 border-2 border-orange-400 bg-orange-400 rounded text-white mt-4"
        type="submit"
      >
        <p class="inline" v-if="!loading">
          Login
        </p>
        <img
          v-else
          class="h-8 inline ml-3"
          src="@/assets/images/loader.svg"
          alt=""
        />
      </button>
      <div class="text-center mt-4">
        <p>
          Don't have an account?
          <router-link class="text-primary font-bold" to="/register"
            >Register</router-link
          >
          instead.
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import localforage from "localforage";

import Navbar from "@/components/Navbar";
export default {
  components: {
    navbar: Navbar
  },
  data() {
    return {
      loading: false,
      error: "",
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    loginForm: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const firstName = await localforage.getItem("firstName");
        const lastName = await localforage.getItem("lastName");
        const email = await localforage.getItem("email");
        if (this.loginForm.email === email) {
          if (firstName && lastName) {
            localforage.setItem("isAuthenticated", true).then(() => {
              this.$router.push({ name: "dashboard" });
            });
          } else {
            this.error = "User Account not found, refresh and try again";
          }
        }
        this.error = "Email not found pal :(";
      } catch (err) {
        this.error = "User Account not found, refresh and try again";
      }
    }
  }
};
</script>
