<template>
  <div class="navbar flex items-center justify-between px-4 md:px-0 py-5">
    <router-link to="/">
      <h2 class="navbar-header text-white">Cryptotrade</h2>
    </router-link>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 18H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 12H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-header {
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
}
.navbar-link {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
}
.navbar {
  overflow-x: hidden;
}
</style>
