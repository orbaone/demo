<template>
  <div class="flex p-5 justify-between items-center container mx-auto">
    <div>
      <img class="h-10 mx-auto mb-4" src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="flex items-center">
      <router-link to="/" class="mr-3">Home</router-link>
      <p class="mr-3 opacity-50">Destination</p>
      <p class="mr-3 opacity-50">About</p>
      <p class="mr-5 opacity-50">Partner</p>
      <router-link
        to="/login"
        class="px-3 py-2 border-2 border-orange-400 rounded text-orange-400 mr-4"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="px-3 py-2 border-2 border-orange-400 rounded bg-orange-400 text-white"
      >
        Register
      </router-link>
    </div>
  </div>
</template>
