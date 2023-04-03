<template>
  <div class="w-screen h-screen bg-onboarding-img bg-cover bg-bottom bg-no-repeat p-12">
    <img src="@/assets/logo.svg" alt="logo" />

    <div class="h-full flex flex-col justify-end">
      <span class="text-5xl text-white font-bold">Learn more about yourself with every dream.</span>
      <button
        @click="router.push({ name: 'auth' })"
        class="text-white bg-primary min-w-full py-5 rounded-xl mt-8"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
</script>

<style scoped></style>
