<script setup lang="ts">
const props = defineProps<{
  imageUrl: string
  title: string
}>()
</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-white rounded-full aspect-square w-full max-w-[250px] min-w-[180px] p-4 shadow-md"
  >
    <img :src="props.imageUrl" :alt="props.title" class="w-[120px] md:w-[140px] h-auto" />
    <p class="pt-2 text-body-bold-16 text-center max-w-[116px]">{{ props.title }}</p>
  </div>
</template>
