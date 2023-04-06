<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import supabase from './lib/supabaseClient'
import { useUserStore } from './stores/user'

const userStore = useUserStore()

supabase.auth.onAuthStateChange((event, session) => {
  userStore.user = session?.user ?? null
})
</script>
