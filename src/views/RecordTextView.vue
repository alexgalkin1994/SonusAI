<template>
  <div class="w-screen min-h-screen bg-midnight text-white py-12 px-8">
    <AppHeader title="Record Your Dream" />
    <form class="dream-form" @submit.prevent="saveDream">
      <textarea
        id="dream-description"
        v-model="dream.description"
        placeholder="Describe your dream..."
        class="w-full h-40 p-2 mb-4 bg-midnight border rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
      ></textarea>
      <button @click="toggleSpeechRecognition" class="flex bg-accent-2 py-2 px-4 rounded-lg mb-2">
        <IconMic /> {{ recognitionActive ? 'Stop' : 'Start' }} Voice Input
      </button>

      {{ imin }}

      {{ recognizedText }}
      <div class="date flex my-8">
        <label for="dream-date" class="block mb-2 font-medium">Dream Date</label>
        <input
          type="date"
          id="dream-date"
          v-model="dream.date"
          required
          class="w-full p-2 mb-4 border bg-midnight text-white rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        class="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Save Dream
      </button>
    </form>
  </div>
  <NavBar />
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import useSpeechRecognition from '@/composables/useSpeechRecognition'
import NavBar from '@/components/NavBar.vue'
import AppHeader from '@/components/AppHeader.vue'
import IconMic from '@/components/icons/IconMic.vue'

const dream = reactive({
  description: '',
  date: new Date().toLocaleDateString('en-CA')
})

const imin = ref(false)

const { recognizedText, recognitionActive, toggleSpeechRecognition } = useSpeechRecognition()

watchEffect(() => {
  imin.value = true
  dream.description = recognizedText.value
})

const saveDream = () => {
  console.log('Saving dream...', dream)
}
</script>

<style scoped></style>