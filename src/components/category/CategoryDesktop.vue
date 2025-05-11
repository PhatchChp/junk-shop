<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { useRouter } from 'vue-router'
import CategoryResult from '../category/CategoryResult.vue'
import SearchBar from '../SearchBar.vue'

const router = useRouter()
const category = useCategoryStore()
</script>

<template>
  <div class="flex">
    <aside
      class="flex flex-col basis-56 shrink-0 border-r border-gray-700 p-4 sticky top-28 overflow-y-auto max-h-[calc(100vh-7rem)]"
    >
      <div
        v-for="menu in category.menuItems"
        :key="menu.type"
        @click="category.onClickMenu(menu.type, category.displayType, router)"
        :class="[
          'hover:bg-primary-gray cursor-pointer rounded-md p-2 my-2',
          menu.type === category.displayType ? 'bg-primary-gray font-semibold' : '',
        ]"
      >
        {{ menu.name.th }}
      </div>
    </aside>

    <section class="flex flex-col flex-1 items-center p-8 gap-4 overflow-y-auto h-full">
      <h1 class="text-heading-36">ประเภทของเก่าที่เรารับซื้อ</h1>
      <SearchBar @searchText="category.handleSearch" />
      <CategoryResult />
    </section>
  </div>
</template>
