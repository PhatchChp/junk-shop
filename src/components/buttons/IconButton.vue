<script setup lang="ts">
const props = defineProps<{ click?: () => void }>()
</script>

<template>
  <button @click="props.click" class="w-10 h-10 p-2 bg-primary-orange text-white rounded-md">
    <slot></slot>
  </button>
</template>
