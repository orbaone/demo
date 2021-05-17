<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <navbar />
    <form
      class="flex flex-col sm:flex-row flex-grow w-full items-center container mx-auto"
      @submit.prevent="submitForm"
    >
      <div class="flex flex-col w-1/2 pr-20">
        <div class="flex flex-col mt-4">
          <h1 class="main-header">
            Welcome Back! <br />Login to continue trading.
          </h1>
          <p class="sub-header text-white my-5">
            Don't have an account?
            <router-link class="pink-text" to="/register">Register</router-link>
            instead
          </p>
          <p v-if="error" class="form-error font-bold text-sm my-3">
            {{ error }}
          </p>
          <label for="email" class="text-sm text-gray-700">Email</label>
          <input
            v-model="$v.loginForm.email.$model"
            class="custom-input"
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
            class="custom-input"
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
          class="btn-primary mt-5"
          type="submit"
          style="max-width: 153px"
        >
          <p class="inline" v-if="!loading">Login</p>
          <img
            v-else
            class="h-8 inline ml-3"
            src="@/assets/images/loader.svg"
            alt=""
          />
        </button>
      </div>
      <div class="hidden sm:block w-1/2 mb-5 md:mb-0">
        <img src="@/assets/images/login-illus.svg" alt="Crytpo Machine" />
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
<style scoped>
.main-header {
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  color: #ffffff;
}

.sub-header {
  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
}

.pink-text {
  color: #ff3c74;
}

label {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  @apply mb-1;
}
</style>
