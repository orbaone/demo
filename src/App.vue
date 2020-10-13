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
      <div v-else>
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
      fetch("https://api.t3std3v.orbaone.com/api/v1/applicants/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ApiKey: `0ba7cb3544804479a2cdeac6e7700228`,
          Secret: `f604eb9406354cf0b4ddca2290f0e880bfd98149a03446be9b83136d9ebb07c2`
        },
        body: JSON.stringify({
          firstName: this.firstName,
          middleName: this.middleName,
          lastName: this.lastName
        })
      })
        .then(response => {
          console.log(response.data);
          this.isApplicantCreated = true;

          renderButton({
            apiKey: "0ba7cb3544804479a2cdeac6e7700228",
            applicantId: "",
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
