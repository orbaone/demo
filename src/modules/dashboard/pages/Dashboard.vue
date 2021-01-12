<template>
  <div>
    <navbar />
    <div
      class="navbar-banner text-white text-center flex flex-col md:flex-row items-center justify-center"
    >
      <p class="banner-text md:mb-0 mb-3 md:mr-8">
        Please verify your indentity to begin booking
      </p>
      <button class="banner-button flex items-center justify-center">
        <p class="banner-button-text">Verify my indetity</p>
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "../../../components/Navbar";

export default {
  components: {
    navbar: Navbar
  }
};
</script>

<style scoped>
.navbar-banner {
  width: 100vw;
  height: 70px;
  background: #fb8f1d;
}

.banner-text {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
}

.banner-button {
  bottom: 88.25%;
  width: 201px;
  height: 44px;

  background: #ffffff;
  border-radius: 8px;
}

.banner-button-text {
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  color: #fb8f1d;
}

@media only screen and (max-width: 768px) {
  .navbar-banner {
    height: auto;
    padding: 20px;
  }
}
</style>
