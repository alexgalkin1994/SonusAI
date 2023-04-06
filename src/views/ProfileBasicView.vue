<template>
  <div>
    <div class="flex justify-between items-start">
      <img :src="avatarURL" alt="avatar" class="w-20 h-20" />
      <span class="text-xl w-full ml-6">
        {{ userStore.profile.first_name }}
      </span>
      <button @click="emit('edit')"><IconEdit /></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconEdit from '@/components/icons/IconEdit.vue'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const userStore = useUserStore()
const emit = defineEmits(['edit'])

const avatarURL = computed(() =>
  userStore.profile.avatar
    ? userStore.profile.avatar_url
    : 'https://api.dicebear.com/6.x/initials/svg?seed=Patches'
)
</script>

<style scoped></style>
