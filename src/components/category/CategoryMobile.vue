<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SearchBar from '../SearchBar.vue'
import CategoryResult from '../category/CategoryResult.vue'

const route = useRoute()
const router = useRouter()

const category = useCategoryStore()

watch(
  () => route.params.type,
  (newType) => category.syncDisplayTypeFromRoute(newType),
  { immediate: true },
)
</script>

<template>
  <section class="flex flex-col gap-3">
    <h1 class="text-heading-30">ประเภทของเก่าที่เรารับซื้อ</h1>

    <!-- Menu -->
    <div class="overflow-x-auto w-full sticky top-0 z-10 mb-2">
      <ul class="flex gap-4">
        <li
          v-for="menu in category.menuItems"
          :key="menu.type"
          @click="category.onClickMenu(menu.type, category.displayType, router)"
          :class="[
            'text-body-14 shrink-0 whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full cursor-pointer',
            menu.type === category.displayType ? 'bg-primary-orange text-white font-semibold' : '',
          ]"
        >
          {{ menu.name.th }}
        </li>
      </ul>
    </div>

    <SearchBar @searchText="category.handleSearch" />
    <CategoryResult />
  </section>
</template>
