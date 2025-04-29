<script setup lang="ts">
const props = defineProps<{
  imagesUrl: string[]
}>()
</script>
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:my-20 mx-auto m-4"
  >
    <img
      v-for="image in props.imagesUrl"
      :key="image"
      :src="image"
      alt="list image"
      class="w-full lg:w-[300px] h-[300px] object-cover rounded-lg shadow"
    />
  </div>
</template>
