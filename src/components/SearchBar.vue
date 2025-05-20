<script setup lang="ts">
import { ref, watch } from 'vue'
import PrimaryButton from './buttons/PrimaryButton.vue'
import IconButton from './buttons/IconButton.vue'
import { CircleX, Search } from 'lucide-vue-next'

const props = withDefaults(defineProps<{ searchText: string }>(), {
  searchText: '',
})
const emit = defineEmits<{
  (event: 'handleSearch', value: string): void
  (event: 'clearSearch'): void
}>()

const searchInput = ref(props.searchText)

watch(
  () => props.searchText,
  (value) => {
    searchInput.value = value
  },
)

const handleSearch = () => {
  emit('handleSearch', searchInput.value)
}

const handleClear = () => {
  searchInput.value = ''
  emit('clearSearch')
}
</script>

<template>
  <form
    @submit.prevent="handleSearch"
    class="flex items-center gap-4 w-full max-h-[46px] max-w-7xl"
  >
    <div class="relative flex-1">
      <input
        v-model="searchInput"
        class="w-full h-[46px] border border-gray-300 rounded-md p-2 pr-10"
        placeholder="ค้นหาหมวดหมู่"
      />
      <button
        v-if="searchInput"
        @click="handleClear"
        class="absolute right-2 top-1/2 -translate-y-1/2"
        tabindex="-1"
        type="button"
        aria-label="Clear search input"
      >
        <CircleX :size="20" color="gray" />
      </button>
    </div>
    <div class="flex items-center">
      <PrimaryButton name="ค้นหา" type="submit" class="hidden lg:inline-flex" />
      <IconButton type="submit" class="lg:hidden ml-2" aria-label="Search">
        <Search />
      </IconButton>
    </div>
  </form>
</template>
