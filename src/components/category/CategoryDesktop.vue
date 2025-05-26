<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import CategoryResult from '@/components/category/CategoryResult.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useRouter } from 'vue-router'
import DesktopMenu from '@/layouts/DesktopMenu.vue'
import type { CategoryType } from '@/types/category'

const router = useRouter()
const category = useCategoryStore()

const handleClickMenu = (type: string) => {
  category.navigateToType(type as CategoryType, router)
}
</script>

<template>
  <div class="flex">
    <DesktopMenu
      :menuItems="category.menuItems"
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
