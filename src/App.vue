<template>
  <div id="app">
    <div style="display:flex; flex-direction: column; justify-content: center;">
      <div style="text-align: center;">
        <img
          style="height: 10rem; margin:0 auto; margin-bottom: 20px;"
          src="@/assets/logo.png"
          alt="logo"
        />
      </div>
      <div
        v-if="!isApplicantCreated"
        style="display:flex; flex-direction: column;"
      >
        <div>
          <p class="text-sm">First Name</p>
          <input
            type="text"
            name="first-name"
            id="first-name"
            class="input"
            v-model="$v.firstName.$model"
          />
        </div>
        <p v-if="$v.firstName.$error" class="form-error">
          Please enter a first name.
        </p>
        <div>
          <p class="text-sm">Middle Name</p>
          <input
            type="text"
            name="middle-name"
            id="middle-name"
            class="input"
            v-model="$v.middleName.$model"
          />
        </div>
        <p v-if="$v.middleName.$error" class="form-error">
          Please enter a middle name.
        </p>
        <div>
          <p class="text-sm">Last Name</p>
          <input
            type="text"
            name="last-name"
            id="last-name"
            class="input"
            v-model="$v.lastName.$model"
          />
        </div>
        <p v-if="$v.lastName.$error" class="form-error">
          Please enter a last name.
        </p>
        <button
          :disabled="$v.$invalid"
          class="button"
          @click="this.createApplicant"
        >
          Create Applicant
        </button>
      </div>
      <div v-show="isApplicantCreated" style="text-align: center;">
        <div
          style="display:flex; width: 100%; justify-content: center; font-weight: 800; font-size: 22px; color: #676767;"
        >
          <p style="margin-right: 5px;">{{ this.firstName }}</p>
          <p style="margin-right: 5px;">{{ this.middleName }}</p>
          <p style="margin-right: 5px;">{{ this.lastName }}</p>
        </div>
        <div id="button"></div>
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
