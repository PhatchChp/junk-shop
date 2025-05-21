<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import CategoryResult from '@/components/category/CategoryResult.vue'
import MobileMenu from '@/layouts/MobileMenu.vue'
import type { CategoryType } from '@/types/category'

const route = useRoute()
const router = useRouter()
const category = useCategoryStore()

const menuItems = category.menuItems.map((item) => ({
  label: item.name.th,
  value: item.type,
}))

const handleClickMenu = (type: string) => {
  category.navigateToType(type as CategoryType, router)
}

watch(
  () => route.params.type,
  (newType) => category.syncDisplayTypeFromRoute(newType),
  { immediate: true },
)
</script>

<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-heading-30">ประเภทของเก่าที่เรารับซื้อ</h1>
    <MobileMenu
      :menuItems="menuItems"
      :selectedMenu="category.displayType"
      @clickMenu="handleClickMenu"
    />
    <SearchBar
      :searchText="category.searchText"
      @handleSearch="category.handleSearch"
      @clearSearch="category.resetSearchText"
    />
    <CategoryResult />
  </div>
</template>
