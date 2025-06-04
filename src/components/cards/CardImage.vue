<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps<{
  imageUrl: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div class="aspect-[4/3] w-full">
      <img :src="props.imageUrl" :alt="props.title" class="w-full h-full object-cover" />
    </div>
    <div class="flex items-center justify-between p-4">
      <div class="text-left">
        <p class="text-base font-semibold truncate">{{ props.title }}</p>
        <p class="text-sm text-gray-500 truncate">{{ props.subtitle }}</p>
      </div>
      <ChevronRight :size="24" class="text-gray-400" />
    </div>
  </div>
</template>
