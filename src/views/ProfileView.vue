<template>
  <div
    class="w-screen min-h-screen bg-midnight text-white bg-cover bg-bottom bg-no-repeat py-12 px-8"
  >
    <AppHeader title="Your Profile" :icon="IconUser" />
    <ProfileEditView v-if="editMode" @save="editMode = false" />
    <ProfileBasicView v-else @edit="editMode = true" />
  </div>
  <NavBar />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import NavBar from '@/components/NavBar.vue'
import IconUser from '@/components/icons/IconUser.vue'
import ProfileBasicView from '@/views/ProfileBasicView.vue'
import ProfileEditView from '@/views/ProfileEditView.vue'
import { ref } from 'vue'

const editMode = ref(false)
</script>

<style scoped></style>
