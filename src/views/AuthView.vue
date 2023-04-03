<template>
  <div
    class="w-screen min-h-screen bg-midnight bg-cover bg-bottom bg-no-repeat py-12 px-8 text-white"
  >
    <input
      class="w-full h-12 p-2 mb-2 bg-midnight border rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
      type="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      class="w-full h-12 p-2 mb-4 bg-midnight border rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button
      @click="login"
      class="w-full py-4 mb-2 bg-primary hover:bg-blue-600 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Login
    </button>
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import supabase from '@/lib/supabaseClient'
import router from '@/router'

const email = ref('')
const password = ref('')

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    console.log('Error logging in:', error.message)
  } else {
    console.log('Logged in successfully:', data)
  }

  router.push({ name: 'journal' })
  console.log('router', router)
}

const signup = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (error) {
    console.log('Error signing up:', error.message)
  } else {
    console.log('Signed up successfully:', data)
  }
}
</script>
