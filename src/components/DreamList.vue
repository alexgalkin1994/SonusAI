<template>
  <div>
    <template v-for="dream in dreams" :key="dream.id">
      <DreamListItem class="text-white mb-8" :dream="dream" />
    </template>
  </div>
</template>

<script setup lang="ts">
import DreamListItem from '@/components/DreamListItem.vue'
import type { Dream } from '@/types/apiTypes'

defineProps<{
  dreams: Dream[]
}>()
</script>

<style scoped></style>
