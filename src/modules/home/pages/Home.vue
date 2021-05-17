<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <navbar />
    <div
      class="flex flex-col-reverse sm:flex-row flex-grow w-full items-center container mx-auto"
    >
      <div class="flex flex-col w-full p-4 sm:w-1/2">
        <p class="small-header">Cryptotrade</p>
        <h1 class="main-header mt-4 max-w-md">Changing the way you trade.</h1>
        <div class="flex items-center mt-5 mb-8">
          <img
            class="crypto-coin mr-2"
            src="@/assets/images/bitcoin.png"
            alt="Bitcoin"
          />
          <img
            class="crypto-coin mr-2"
            src="@/assets/images/eth.png"
            alt="Etherium"
          />
          <img
            class="crypto-coin mr-2"
            src="@/assets/images/dogecoin.png"
            alt="Dogecoin"
          />
          <img
            class="crypto-coin mr-2"
            src="@/assets/images/monero.png"
            alt="Monero"
          />
          <p class="font-bold para ml-5">and more.</p>
        </div>
        <p class="para mb-5">
          Welcome to Orba's own fake crypto exchange company demo. This shows
          what Orba One's integration might look like. Try creating an account
          and verifying your identity.
        </p>
        <div class="flex items-center">
          <router-link
            to="/register"
            class="btn-primary"
            style="max-width: 153px"
          >
            Try for free
          </router-link>
          <router-link to="/" class="para font-bold ml-2 md:ml-8"
            >See pricing plans</router-link
          >
        </div>
      </div>
      <div class="sm:w-1/2 mb-5 md:mb-0 md:max-w-none max-w-md px-4">
        <img src="@/assets/images/main-illustration.svg" alt="Crytpo Machine" />
      </div>
    </div>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";

import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    navbar: Navbar
  },
  data() {
    return {
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
<style scoped>
.para {
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
}

.small-header {
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 37px;
  color: #ff3c74;
}

.main-header {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 120%;
  /* or 58px */

  color: #ffffff;
}

.crypto-coin {
  height: 36px;
}
@media only screen and (max-width: 768px) {
  .main-header {
    font-size: 36px;
    line-height: 120%;
  }

  .small-header {
    font-size: 24px;
    line-height: 32px;
  }
  .para {
    font-size: 16px;
    line-height: 150%;
  }
}
</style>
