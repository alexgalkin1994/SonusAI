<template>
  <button
    class="w-28 h-28 text-xl hover:bg-zinc-800 font-bold py-2 px-4 rounded flex flex-col items-center justify-center"
    :class="{
      'bg-zinc-800': emotion.selected,
      'border-zinc-500': emotion.selected,
      'border-2': emotion.selected
    }"
  >
    <span class="text-3xl mb-2">{{ emotion.emoji }}</span>
    <span>{{ emotion.name }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  emotion: any
}>()
</script>

<style scoped></style>
