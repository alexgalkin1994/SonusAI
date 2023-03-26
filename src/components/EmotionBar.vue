<template>
  <div class="flex gap-4">
    <EmotionBarButton
      v-for="emotion in emotions"
      :key="emotion.name"
      :emotion="emotion"
      @click="selectEmotion(emotion)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Emotion } from '@/models/FormTypes'
import { computed, ref } from 'vue'
import EmotionBarButton from './EmotionBarButton.vue'

const emotions = ref<Emotion[]>([
  { id: 1, name: 'Happiness', emoji: '😊', selected: false },
  { id: 2, name: 'Fear', emoji: '😱', selected: false },
  { id: 3, name: 'Anxiety', emoji: '😟', selected: false },
  { id: 4, name: 'Anger', emoji: '😠', selected: false },
  { id: 5, name: 'Sadness', emoji: '😢', selected: false },
  { id: 6, name: 'Love', emoji: '💕', selected: false },
  { id: 7, name: 'Excitement', emoji: '🥳', selected: false },
  { id: 8, name: 'Confusion', emoji: '🤔', selected: false }
])

const selectedEmotions = computed(() => emotions.value.filter((e) => e.selected))

const emit = defineEmits(['selectEmotion'])

const selectEmotion = (emotion: Emotion) => {
  emotion.selected = !emotion.selected
  emit('selectEmotion', selectedEmotions)
}
</script>

<style scoped></style>
