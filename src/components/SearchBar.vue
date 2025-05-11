<script setup lang="ts">
import { ref } from 'vue'
import PrimaryButton from './buttons/PrimaryButton.vue'
import IconButton from './buttons/IconButton.vue'
import { Search } from 'lucide-vue-next'

const emit = defineEmits<{ (event: 'searchText', value: string): void }>()
const searchInput = ref('')
const search = () => {
  emit('searchText', searchInput.value)
}
</script>

<template>
  <div class="flex gap-4 w-full max-w-7xl">
    <input
      v-model="searchInput"
      @keyup.enter="search"
      class="flex-1 border border-gray-300 rounded-md p-2"
      placeholder="ค้นหาหมวดหมู่"
    />
    <PrimaryButton name="ค้นหา" :click="search" class="hidden lg:flex" />
    <IconButton :click="search" class="lg:hidden">
      <Search />
    </IconButton>
  </div>
</template>
