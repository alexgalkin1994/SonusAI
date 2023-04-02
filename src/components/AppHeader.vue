<template>
  <div
    class="title flex justify-between items-center text-white text-md mb-6 sticky top-0 bg-midnight py-2"
  >
    <button @click="back" class="flex justify-center items-center w-10 h-10">
      <IconChevronLeft />
    </button>
    <div class="title flex">
      <div class="mr-2">
        <component :is="icon" />
      </div>
      <h2>{{ title }}</h2>
    </div>
    <div class="w-10 h-10"></div>
  </div>
</template>

<script setup lang="ts">
import IconChevronLeft from './icons/IconChevronLeft.vue'
import { useRouter } from 'vue-router'

defineProps<{
  icon?: any
  title: string
}>()

const router = useRouter()

const back = () => {
  router.go(-1)
}
</script>

<style scoped></style>
