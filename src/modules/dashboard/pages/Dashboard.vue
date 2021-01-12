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
    <div class="flex container mx-auto mt-10">
      <div class="w-2/3 mr-5">
        <div class="flex flex-col items-baseline mb-5">
          <h1 class="text-4xl font-serif mr-3">
            Make your dream trip a reality
          </h1>
          <p class="text-xl font-medium">Featured destinations</p>
        </div>
        <div class="flex my-3">
          <destination-card
            background="/photo-one.png"
            location="Raja Ampat"
            country="Indonesia"
            class="w-1/3 mr-3"
          ></destination-card>
          <destination-card
            background="/photo-two.png"
            location="Fanjingshan"
            country="China"
            class="w-1/3 mr-3"
          ></destination-card>
          <destination-card
            background="/photo-three.png"
            location="Vevey"
            country="Switzerland"
            class="w-1/3 mr-3"
          ></destination-card>
        </div>
        <div class="flex">
          <destination-card
            background="/photo-one.png"
            location="Raja Ampat"
            country="Indonesia"
            class="w-1/3 mr-3"
          ></destination-card>
          <destination-card
            background="/photo-two.png"
            location="Fanjingshan"
            country="China"
            class="w-1/3 mr-3"
          ></destination-card>
          <destination-card
            background="/photo-three.png"
            location="Vevey"
            country="Switzerland"
            class="w-1/3 mr-3"
          ></destination-card>
        </div>
      </div>
      <div class="w-1/3">
        <div class="flex flex-col items-baseline mt-3 mb-10">
          <h1 class="text-2xl font-sans mr-3">
            Trip finder
          </h1>
          <div class="flex flex-col w-full mt-4">
            <div class="flex w-full">
              <div class="w-1/2 mr-4">
                <select name="" id="" class="input">
                  <option value="location">Location</option>
                </select>
              </div>
              <div class="w-1/2">
                <select name="" id="" class="input">
                  <option value="location">Activity</option>
                </select>
              </div>
            </div>
            <div class="flex w-full mt-4">
              <div class="w-1/2 mr-4">
                <select name="" id="" class="input">
                  <option value="location">Class</option>
                </select>
              </div>
              <div class="w-1/2">
                <select name="" id="" class="input">
                  <option value="location">Date</option>
                </select>
              </div>
            </div>
            <div class="mt-4">
              <p>Please verify your identity to begin booking</p>
              <button
                class="bg-orange-500 text-white rounded px-4 py-2 mt-2"
                id="orba-button"
              >
                Verify my Identity
              </button>
            </div>
          </div>
        </div>
        <travel-blog-card />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../../components/Navbar";
import DestinationCard from "../components/DestinationCard";
import TravelBlogCard from "../components/TravelBlogCard";
export default {
  components: {
    navbar: Navbar,
    "destination-card": DestinationCard,
    "travel-blog-card": TravelBlogCard
  }
};
</script>
DestinationCard

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
