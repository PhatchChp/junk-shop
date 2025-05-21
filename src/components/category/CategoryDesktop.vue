<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import CategoryResult from '@/components/category/CategoryResult.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'
import DesktopMenu from '@/layouts/DesktopMenu.vue'
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
  <div class="flex">
    <DesktopMenu
      :menuItems="menuItems"
      :selectedMenu="category.displayType"
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
