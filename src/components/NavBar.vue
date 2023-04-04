<template>
  <div class="fixed z-10 h-20 w-full px-2 bottom-0 bg-midnight text-white flex justify-around">
    <button class="w-12 flex justify-center items-center">
      <IconHome />
    </button>
    <button @click="router.push({ name: 'journal' })" class="w-12 flex justify-center items-center">
      <IconJournal />
    </button>
    <button
      @click="router.push({ name: 'record-text' })"
      class="bg-accent-1 w-20 h-20 flex justify-center items-center rounded-full -my-4 shadow-primary"
    >
      <IconPlus />
    </button>
    <button class="w-12 flex justify-center items-center">
      <IconPsychProfile />
    </button>
    <button class="w-12 flex justify-center items-center">
      <IconUser />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconHome from './icons/IconHome.vue'
import IconJournal from './icons/IconJournal.vue'
import IconPsychProfile from './icons/IconPsychProfile.vue'
import IconUser from './icons/IconUser.vue'
import IconPlus from './icons/IconPlus.vue'

const router = useRouter()
</script>

<style scoped></style>
