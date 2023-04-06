<template>
  <div>
    <h1>Profile Edit View</h1>
    <form @submit.prevent>
      <STextInput>Your Name</STextInput>
    </form>
    <SButton @click="saveProfile" class="w-full">Save</SButton>
  </div>
</template>

<script setup lang="ts">
import SButton from '@/components/commonComponents/SButton.vue'
import STextInput from '@/components/commonComponents/STextInput.vue'

const emit = defineEmits(['save'])

const saveProfile = () => {
  console.log('save profile')
  emit('save')
}
</script>

<style scoped></style>
