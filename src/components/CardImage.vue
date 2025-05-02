<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  imageUrl: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <div
    class="border border-gray-200 bg-white rounded-2xl max-w-[280px] max-h-[280px] cursor-pointer shadow-2xs"
  >
    <img
      :src="props.imageUrl"
      :alt="props.title"
      class="object-cover w-[280px] h-[186px] rounded-t-2xl"
    />
    <div class="flex justify-between p-2">
      <div class="grow">
        <p class="text-body-bold-20">{{ props.title }}</p>
        <p class="text-label-18-gray">{{ props.subtitle }}</p>
      </div>
      <div class="self-center"><ChevronRight :size="30" color="gray" /></div>
    </div>
  </div>
</template>
