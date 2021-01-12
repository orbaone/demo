<template>
  <div>
    <navbar />
    <form
      class="flex flex-col flex-grow p-4 justify-center  w-full max-w-md mx-auto"
      @submit.prevent="submitForm"
    >
      <p class="text-3xl mt-3 text-gray-800 font-bold font-serif">
        Start Travelling,
      </p>
      <p class="text-3xl mb-3 text-gray-800 font-bold font-serif">
        Sign Up for Fake Travel
      </p>
      <p v-if="error" class="form-error font-bold text-sm my-3">
        {{ error }}
      </p>
      <div class="flex flex-col mt-4">
        <div class="name-fields flex justify-between">
          <div class="first-name mr-4">
            <label for="firstName" class="text-sm text-gray-700"
              >First Name</label
            >
            <input
              v-model="$v.registerForm.firstName.$model"
              class="input"
              type="text"
              name="firstName"
              autofocus
              placeholder="John"
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
              class="input"
              type="text"
              name="lastName"
              autofocus
              placeholder="Doe"
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
        <label for="username" class="text-sm text-gray-700">Username</label>
        <input
          v-model="$v.registerForm.username.$model"
          class="input"
          type="text"
          name="username"
          autofocus
          data-testid="register-username-input"
          placeholder="johndoe876"
        />
        <div v-if="$v.registerForm.username.$error">
          <p v-if="$v.registerForm.username.$invalid" class="form-error">
            The username entered is invalid
          </p>
          <p v-else-if="$v.registerForm.username.required" class="form-error">
            Please enter an username
          </p>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <label for="email" class="text-sm text-gray-700">Email</label>
        <input
          v-model="$v.registerForm.email.$model"
          class="input"
          type="text"
          name="email"
          autofocus
          data-testid="register-email-input"
          placeholder="admin@example.com"
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
          class="input"
          type="password"
          name="password"
          data-testid="register-password-input"
          placeholder="Password"
        />
        <div v-if="$v.registerForm.password.$error">
          <p v-if="$v.registerForm.password.required" class="form-error">
            Please enter your password
          </p>
        </div>
      </div>
      <button
        :disabled="this.$v.registerForm.$invalid"
        class="px-5 py-2 border-2 border-orange-400 bg-orange-400 rounded text-white mt-4"
        type="submit"
      >
        <p class="inline" v-if="!loading">
          Register
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
          Already have an Account?
          <router-link class="text-primary font-bold" to="/login"
            >Login</router-link
          >
          instead.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

import Navbar from "../../../components/Navbar";
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
        lastName: "",
        username: ""
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
      username: {
        required: true
      },
      password: {
        required
      }
    }
  }
};
</script>

<style></style>
