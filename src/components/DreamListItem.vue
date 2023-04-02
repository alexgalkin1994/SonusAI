<template>
  <div @click="viewDreamDetails">
    <div class="title flex items-center">
      <span class="text-2xl font-bold mr-2">{{ dream.title }}</span>
      <!-- <span class="text-xs text-gray">{{ dream.date.toLocaleTimeString() }}</span> -->
    </div>
    <div class="text-sm line-clamp-3">{{ dream.description }}...</div>
    <div class="tags overflow-x-scroll whitespace-nowrap text-gray">
      <template v-for="tag in dream.tags" :key="tag">
        <span class="mr-2 whitespace-nowrap text-xs"> #{{ tag }} </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Dream } from '@/types/apiTypes'

const props = defineProps<{
  dream: Dream
}>()

const router = useRouter()

const viewDreamDetails = () => {
  router.push({
    name: 'dream-detail',
    params: { id: props.dream.id }
  })
}
</script>

<style scoped></style>
