<template>
  <!-- <input
    type="text"
    class="p-2 mb-4 bg-midnight border rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  /> -->

  <div class="relative">
    <input
      type="text"
      class="block px-2.5 pb-2.5 pt-4 w-full bg-midnight border rounded shadow-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 peer"
    />
    <label
      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-midnight dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      ><slot></slot
    ></label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
