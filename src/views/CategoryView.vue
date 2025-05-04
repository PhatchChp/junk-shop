<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { typeMap, type CategoryType } from '@/constants/categoryTypes'
import MainLayout from '@/layouts/MainLayout.vue'
import { useCategoryStore } from '@/stores/category'
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const category = useCategoryStore()
const route = useRoute()

const displayType = computed(() => {
  const rawType = route.params.type
  const categoryType = Array.isArray(rawType) ? rawType[0] : rawType //แปลงให้เหลือ string เดียว เอาตัวแรก ถ้ามีหลายตัว
  const isValid = categoryType && categoryType in typeMap
  return isValid ? (categoryType as CategoryType) : 'all'
})

const categoryMenu = [
  { imageUrl: '', nameTH: 'ทั้งหมด', nameEN: 'All', type: 'all' },
  ...category.items.filter((item) => Object.keys(typeMap).includes(item.type as string)),
]

const handleSearch = (search: string) => {
  console.log(search)
}
</script>

<template>
  <MainLayout>
    <div class="flex justify-between">
      <aside class="flex flex-col flex-none border-r border-gray-700 p-4">
        <RouterLink
          v-for="menu in categoryMenu"
          :key="menu.type"
          :to="{ name: 'category', params: { type: menu.type } }"
          :class="[
            'hover:bg-primary-gray rounded-md p-2 my-2',
            menu.type === displayType ? 'bg-primary-gray font-semibold' : '',
          ]"
        >
          {{ menu.nameTH }}
        </RouterLink>
      </aside>

      <div class="flex flex-1 flex-col items-center px-8 gap-4">
        <h1 class="text-heading-36">ประเภทของเก่าที่เรารับซื้อ</h1>
        <SearchBar @searchText="handleSearch" />

        <!-- Content -->
        <div class="self-start">
          <p class="text-body-bold-20">
            ประเภท
            <span class="text-primary-orange">{{ typeMap[displayType] || 'ทั้งหมด' }}</span>
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
