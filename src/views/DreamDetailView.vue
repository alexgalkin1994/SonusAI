<template>
  <div
    class="w-screen min-h-screen bg-midnight bg-cover bg-bottom bg-no-repeat py-12 px-8 text-white"
  >
    <div v-if="dream" class="content">
      <AppHeader :title="dream.title" />
      <div class="text-5xl mb-8">{{ dream.title }}</div>
      <div class="text-3xl mb-2">Description:</div>
      <div class="mb-2">{{ dream.description }}</div>
      <div class="tags overflow-x-scroll whitespace-nowrap text-gray mb-8">
        <template v-for="tag in dream.tags" :key="tag">
          <span class="mr-2 whitespace-nowrap text-xs"> #{{ tag }} </span>
        </template>
      </div>
      <div class="text-3xl mb-2">Interpretation:</div>
      <div class="mt-2 mb-16">{{ dream.interpretation }}</div>
    </div>
  </div>
  <NavBar />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'
import type { Dream } from '@/types/apiTypes'
import { useDreamsStore } from '@/stores/dreamsStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const dreamsStore = useDreamsStore()

const dream = ref<Dream>()

const getDream = async () => {
  dream.value = await dreamsStore.fetchDreamById(router.currentRoute.value.params.id as string)
}
getDream()
</script>

<style scoped></style>
