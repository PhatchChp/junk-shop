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
    class="flex justify-center items-center w-[120px] h-[46px] border border-primary-orange rounded-sm text-primary-orange hover:bg-primary-orange duration-300 hover:text-white cursor-pointer"
  >
    {{ props.name }}
  </component>
</template>
