<template>
  <div id="app">
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
import { renderButton } from "@orbaone/core";

export default {
  name: "App",
  components: {},
  data() {
    return {
      isApplicantCreated: false,
      firstName: "",
      middleName: "",
      lastName: ""
    };
  },
  methods: {
    createApplicant() {
      this.isApplicantCreated = false;
      fetch("https://thirdparty.t3std3v.orbaone.com/applicants/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: this.firstName,
          middleName: this.middleName,
          lastName: this.lastName
        })
      })
        .then(async response => {
          const data = await response.json();
          renderButton({
            apiKey: "0ba7cb3544804479a2cdeac6e7700228",
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
