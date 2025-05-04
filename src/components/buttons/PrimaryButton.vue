<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  name: string
  click?: () => void
  to?: string | object
}>()

const baseClass =
  'flex justify-center items-center w-[120px] h-[46px] text-sm xl:text-base rounded-sm bg-primary-orange text-white hover:opacity-75 duration-300 cursor-pointer'
</script>

<template>
  <RouterLink v-if="props.to" :to="props.to" :class="baseClass">{{ props.name }}</RouterLink>
  <button v-else @click="props.click" :class="baseClass">{{ props.name }}</button>
</template>
