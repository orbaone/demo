<template>
  <div id="app">
    <div>
      <p class="absolute right-0 top-0 mt-4 mr-4">v{{ version }}</p>
    </div>
    <div class="flex flex-col items-center" style="min-width: 250px;">
      <div class="w-full text-center">
        <img class="h-48 mx-auto mb-4" src="@/assets/logo.png" alt="logo" />
      </div>
      <div v-if="!this.isApplicantCreated" class="flex flex-col">
        <div>
          <p class="text-sm mb-2">First Name</p>
          <input
            type="text"
            name="first-name"
            id="first-name"
            class="input"
            placeholder="John"
            v-model="$v.firstName.$model"
          />
        </div>
        <p v-if="$v.firstName.$error" class="form-error">
          Please enter a first name.
        </p>
        <div class="mt-4">
          <p class="text-sm mb-2">Middle Name</p>
          <input
            type="text"
            name="middle-name"
            id="middle-name"
            class="input"
            placeholder="Anthony"
            v-model="$v.middleName.$model"
          />
        </div>
        <p v-if="$v.middleName.$error" class="form-error">
          Please enter a middle name.
        </p>
        <div class="mt-4">
          <p class="text-sm mb-2">Last Name</p>
          <input
            type="text"
            name="last-name"
            id="last-name"
            class="input"
            placeholder="Doe"
            v-model="$v.lastName.$model"
          />
        </div>
        <p v-if="$v.lastName.$error" class="form-error">
          Please enter a last name.
        </p>
        <button
          :disabled="$v.$invalid"
          class="button w-full"
          @click="this.createApplicant"
        >
          Create Applicant
        </button>
      </div>
      <div v-show="this.isApplicantCreated" class="w-full text-center">
        <div class="flex w-full justify-center font-bold">
          <p class="text-3xl text-gray-800 my-4">
            {{ this.firstName }} {{ this.middleName }} {{ this.lastName }}
          </p>
        </div>
        <div>
          <div id="button"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { renderButton } from "../lib/index";

const pkg = require("../package.json");

export default {
  name: "App",
  components: {},
  data() {
    return {
      version: `${pkg.version}-${process.env.NODE_ENV}`,
      isApplicantCreated: false,
      firstName: "",
      middleName: "",
      lastName: ""
    };
  },
  methods: {
    createApplicant() {
      const formData = new FormData();
      this.isApplicantCreated = false;

      formData.append("firstName", this.firstName);
      formData.append("middleName", this.middleName);
      formData.append("lastName", this.lastName);

      fetch("https://bloom.clientloop.io/trader/v1/test/applicant", {
        method: "POST",
        body: formData
      })
        .then(async response => {
          const data = await response.json();
          renderButton({
            apiKey: "7f28e4ecf15449888649f28a7a7ab8cb",
            applicantId: `${data.applicantId}`,
            target: "#button",
            onCancelled: data => {
              console.log(data);
            },
            onSuccess: data => {
              console.log(data);
            },
            onError: err => {
              console.log(err);
            },
            steps: ["welcome", "selfie", "document", "finish"]
          });
          this.isApplicantCreated = true;
        })
        .catch(err => {
          console.log(err);
        });
    }
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
