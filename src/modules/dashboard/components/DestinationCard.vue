<template>
  <div
    class="destination-card rounded-lg relative hover:shadow-lg"
    :style="`background-image: url(${background});`"
  >
    <div class="absolute p-5 bottom-0 bg-white rounded-tr-lg rounded-bl-lg">
      <p class="text-gray-800 font-bold">{{ location }}</p>
      <p class="text-sm text-gray-700">{{ country }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["background", "location", "country"]
};
</script>
<style scoped>
.destination-card {
  transition: all 0.3s ease-in-out;
  min-height: 300px;
  background-size: cover;
  @apply flex;
}
.destination-card:hover {
  transform: translateY(-10px);
}
</style>
