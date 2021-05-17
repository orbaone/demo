<template>
  <div class="container mx-auto">
    <desktop-navbar class="w-0 h-0 md:h-auto md:w-full" />
    <mobile-navbar class="md:w-0 md:h-0" />
  </div>
</template>

<script>
import DesktopNavbar from "@/components/DesktopNavbar.vue";
import MobileNavbar from "./MobileNavbar.vue";
export default {
  components: {
    "desktop-navbar": DesktopNavbar,
    MobileNavbar
  }
};
</script>
<style scoped></style>
