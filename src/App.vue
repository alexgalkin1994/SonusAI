<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <div :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
