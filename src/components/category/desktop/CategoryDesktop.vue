<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import CategoryResult from '../CategoryResult.vue'
import SearchBar from '@/components/SearchBar.vue'
import CategoryMenuDesktop from '../desktop/CategoryMenuDesktop.vue'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()
const router = useRouter()
const category = useCategoryStore()

const handleClickMenu = (type: string) => {
  category.navigateToType(type, router)
}

watch(
  () => route.params.type,
  (newType) => category.syncDisplayTypeFromRoute(newType),
  { immediate: true },
)
</script>

<template>
  <div class="flex">
    <CategoryMenuDesktop
      :menuItems="category.menuItems"
      :selectedType="category.displayType"
      @clickMenu="handleClickMenu"
    />

    <section class="flex flex-col flex-1 items-center p-8 gap-4 overflow-y-auto h-full">
      <h1 class="text-heading-36">ประเภทของเก่าที่เรารับซื้อ</h1>
      <SearchBar
        :searchText="category.searchText"
        @handleSearch="category.handleSearch"
        @clearSearch="category.resetSearchText"
      />
      <CategoryResult />
    </section>
  </div>
</template>
