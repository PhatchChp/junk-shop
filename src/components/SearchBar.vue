<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from './buttons/PrimaryButton.vue'
const emit = defineEmits<{ (event: 'searchText', value: string): void }>()
const searchInput = ref('')

const search = () => {
  emit('searchText', searchInput.value)
}
</script>

<template>
  <div class="flex my-8 gap-4">
    <input
      v-model="searchInput"
      @keyup.enter="search"
      class="w-2xl border border-gray-300 rounded-md p-2"
      placeholder="ค้นหาหมวดหมู่"
    />
    <PrimaryButton name="ค้นหา" :click="search" />
  </div>
</template>
