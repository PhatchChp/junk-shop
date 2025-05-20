<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

const props = defineProps<{ type?: ButtonHTMLAttributes['type'] }>()
</script>

<template>
  <button
    :type="props.type ?? 'button'"
    class="w-10 h-10 p-2 bg-primary-orange text-white rounded-md"
  >
    <slot></slot>
  </button>
</template>
