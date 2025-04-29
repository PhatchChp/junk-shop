<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  name: string
  click?: () => void
  to?: string | object
}>()
</script>

<template>
  <component
    :is="props.to ? RouterLink : 'button'"
    :to="props.to"
    @click="props.to ? undefined : props.click"
    class="flex justify-center items-center w-[120px] h-[46px] text-sm xl:text-base rounded-sm bg-primary-orange text-white hover:opacity-75 duration-300 cursor-pointer"
    >{{ name }}</component
  >
</template>
