<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  name: string
  click?: () => void
  to?: string | object
}>()

const baseClass =
  'flex justify-center items-center w-[120px] h-[46px] border border-primary-orange rounded-sm text-primary-orange hover:bg-primary-orange duration-300 hover:text-white cursor-pointer'
</script>

<template>
  <RouterLink v-if="props.to" :to="props.to" :class="baseClass">{{ props.name }}</RouterLink>
  <button v-else @click="props.click" :class="baseClass">{{ props.name }}</button>
</template>
