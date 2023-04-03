<template>
  <div class="w-screen min-h-screen bg-midnight text-white py-12 px-8">
    <AppHeader title="Record Your Dream" />
    <form class="dream-form" @submit.prevent>
      <textarea
        id="dream-description"
        v-model="dream.description"
        placeholder="Describe your dream..."
        class="w-full h-40 p-2 mb-4 bg-midnight border rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
      ></textarea>
      <button @click="toggleSpeechRecognition" class="flex bg-accent-2 py-2 px-4 rounded-lg mb-2">
        <IconMic /> {{ recognitionActive ? 'Stop' : 'Start' }} Voice Input
      </button>

      recognized text: {{ recognizedText }}
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
        @click="saveDream"
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
import supabase from '@/lib/supabaseClient'

const user = ref()
// TODO: implement user store
const loadData = async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user
}
loadData()

const dream = reactive({
  description: '',
  date: new Date().toLocaleDateString('en-CA')
})

const { recognizedText, recognitionActive, toggleSpeechRecognition } = useSpeechRecognition()

watchEffect(() => {
  dream.description = recognizedText.value
})

const seperateGPTResponse = (response) => {
  const titleStart = response.indexOf('Title:') + 'Title:'.length
  const interpretationStart = response.indexOf('Interpretation:') + 'Interpretation:'.length
  const tagsStart = response.indexOf('Tags:') + 'Tags:'.length

  const title = response.slice(titleStart, interpretationStart - 'Interpretation:'.length).trim()
  const interpretation = response.slice(interpretationStart, tagsStart - 'Tags:'.length).trim()
  const tagsString = response.slice(tagsStart).trim()
  const tags = JSON.parse(tagsString)

  return { title, interpretation, tags }
}

const saveDream = async () => {
  const {
    data: { user }
  } = await supabase.auth.getUser()

  const interpretationRes = await supabase.functions.invoke('openai', {
    body: JSON.stringify({ query: dream.description })
  })

  const { title, interpretation, tags } = seperateGPTResponse(interpretationRes.data.interpretation)

  const { data, error } = await supabase.from('dreams').insert({
    ...dream,
    title: title,
    tags: tags,
    interpretation: interpretation,
    moods: ['sad'],
    user_id: user?.id
  })

  if (error) {
    console.log('Error adding dream:', error.message)
  } else {
    console.log('Dream added successfully:', data)
  }
}
</script>

<style scoped></style>
