<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <navbar />
    <form
      class="flex flex-col sm:flex-row flex-grow w-full items-center container mx-auto px-5 md:px-0 md:px-0 mt-10 md:mt-0"
      @submit.prevent="submitForm"
    >
      <div class="flex flex-col md:w-1/2 md:pr-20">
        <h1 class="main-header">
          Start trading today <br />Sign up for Cryptotrade for free.
        </h1>
        <p class="sub-header text-white my-5">
          Already have an account?
          <router-link class="pink-text" to="/login">Login</router-link> instead
        </p>
        <p v-if="error" class="form-error font-bold text-sm my-3">
          {{ error }}
        </p>
        <div class="flex flex-col">
          <div class="name-fields flex justify-between">
            <div class="first-name mr-4">
              <label for="firstName" class="text-sm text-gray-700"
                >First Name</label
              >
              <input
                v-model="$v.registerForm.firstName.$model"
                class="custom-input"
                type="text"
                name="firstName"
                autofocus
                data-testid="register-first-name-input"
              />
              <div v-if="$v.registerForm.firstName.$error">
                <p v-if="$v.registerForm.firstName.required" class="form-error">
                  Please enter your password
                </p>
              </div>
            </div>
            <div class="last-name">
              <label for="lastName" class="text-sm text-gray-700"
                >Last Name</label
              >
              <input
                v-model="$v.registerForm.lastName.$model"
                class="custom-input"
                type="text"
                name="lastName"
                autofocus
                data-testid="register-last-name-input"
              />
              <div v-if="$v.registerForm.lastName.$error">
                <p v-if="$v.registerForm.lastName.required" class="form-error">
                  Please enter your password
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label for="email" class="text-sm text-gray-700">Email</label>
          <input
            v-model="$v.registerForm.email.$model"
            type="text"
            class="custom-input"
            name="email"
            autofocus
            data-testid="register-email-input"
          />
          <div v-if="$v.registerForm.email.$error">
            <p v-if="$v.registerForm.email.$invalid" class="form-error">
              The email entered is invalid
            </p>
            <p v-else-if="$v.registerForm.email.required" class="form-error">
              Please enter an email
            </p>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label for="password" class="text-sm text-gray-700">Password</label>
          <input
            v-model="$v.registerForm.password.$model"
            type="password"
            class="custom-input"
            name="password"
            data-testid="register-password-input"
          />
          <div v-if="$v.registerForm.password.$error">
            <p v-if="$v.registerForm.password.required" class="form-error">
              Please enter your password
            </p>
          </div>
        </div>
        <button
          :disabled="this.$v.registerForm.$invalid"
          class="btn-primary mt-5"
          type="submit"
          style="max-width: 153px"
        >
          <p class="inline" v-if="!loading">Sign Up</p>
          <img
            v-else
            class="h-8 inline ml-3"
            src="@/assets/images/loader.svg"
            alt=""
          />
        </button>
      </div>
      <div class="hidden md:block w-1/2 mb-5 md:mb-0">
        <img
          class="mt-10 md:mt-0"
          src="@/assets/images/signup-illus.svg"
          alt="Crytpo Machine"
        />
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
      registerForm: {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      }
    };
  },
  validations: {
    registerForm: {
      email: {
        required,
        email
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        await localforage.clear();
        localforage.setItem("firstName", this.registerForm.firstName);
        localforage.setItem("lastName", this.registerForm.lastName);
        localforage.setItem("email", this.registerForm.email);
        localforage.setItem("isAuthenticated", true).then(() => {
          this.$router.push({ name: "dashboard" });
        });
      } catch (error) {
        this.error = "An Error occured, try refreshing :(";
      }
    }
  }
};
</script>

<style scoped>
html {
  background: url("../../../assets/images/background.png") no-repeat center
    fixed;
  background-size: cover;
}

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
label {
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  @apply mb-1;
}
</style>
