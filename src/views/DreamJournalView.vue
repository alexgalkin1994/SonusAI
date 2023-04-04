<template>
  <div class="w-screen min-h-screen bg-midnight bg-cover bg-bottom bg-no-repeat py-12 px-8">
    <AppHeader title="Your Journal" :icon="IconJournal" />
    <DreamList :dreams="dreamsStore.dreams" class="mb-16" />
  </div>
  <NavBar />
</template>

<script setup lang="ts">
import { useDreamsStore } from '@/stores/dreamsStore'
import AppHeader from '@/components/AppHeader.vue'
import DreamList from '@/components/DreamList.vue'
import NavBar from '@/components/NavBar.vue'
import IconJournal from '@/components/icons/IconJournal.vue'
import { ref } from 'vue'

const dreamsStore = useDreamsStore()
const loading = ref(true)

if (dreamsStore.dreams.length < 1) {
  dreamsStore.fetchDreams()
}
</script>

<style scoped></style>
