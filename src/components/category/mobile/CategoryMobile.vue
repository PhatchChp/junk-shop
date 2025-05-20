<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
import CategoryResult from '../CategoryResult.vue'
import CategoryMenuMobile from '../mobile/CategoryMenuMobile.vue'

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
  <section class="flex flex-col gap-3">
    <h1 class="text-heading-30">ประเภทของเก่าที่เรารับซื้อ</h1>
    <CategoryMenuMobile
      :menuItems="category.menuItems"
      :selectedType="category.displayType"
      @clickMenu="handleClickMenu"
    />
    <SearchBar
      :searchText="category.searchText"
      @handleSearch="category.handleSearch"
      @clearSearch="category.resetSearchText"
    />
    <CategoryResult />
  </section>
</template>
