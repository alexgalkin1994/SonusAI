<template>
  <div>
    Emotions [{{ emotions }}]
    <EmotionBar @select-emotion="selectEmotion" />
  </div>
</template>

<script setup lang="ts">
import type { Emotion } from '@/models/FormTypes'
import { ref } from 'vue'
import EmotionBar from '../components/EmotionBar.vue'

const emotions = ref()

const selectEmotion = (selectedEmotions: Emotion[]) => {
  emotions.value = selectedEmotions
}
</script>

<style scoped></style>
