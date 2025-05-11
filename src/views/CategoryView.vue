<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { typeMap } from '@/constants/categoryTypes'
import { useCategoryStore } from '@/stores/category'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NoResult from '@/components/NoResult.vue'

const route = useRoute()
const router = useRouter()
const category = useCategoryStore()
const categoryMenu = category.menuItems

watch(
  () => route.params.type,
  (newType) => category.syncDisplayTypeFromRoute(newType),
  { immediate: true },
)
</script>

<template>
  <MainLayout>
    <div class="flex">
      <aside
        class="flex flex-col basis-56 shrink-0 border-r border-gray-700 p-4 sticky top-28 h-fit self-start"
      >
        <div
          v-for="menu in categoryMenu"
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

        <div v-if="category.searchResult.length === 0 && category.searchText">
          <NoResult :text="category.searchText" />
        </div>

        <div v-else-if="category.displayItems" class="self-start">
          <p class="text-body-bold-20">
            {{ category.searchText ? 'ค้นหา' : 'ประเภท' }}
            <span class="text-primary-orange">{{
              category.searchText || typeMap[category.displayType]
            }}</span>
          </p>
          <div v-for="item in category.displayItems" :key="item.name.en">
            <div class="max-w-3xl">
              <h4 class="text-body-bold-20 mt-8 pb-4">{{ item.name.th }}</h4>
              <ul class="flex gap-8 flex-wrap text-gray-600">
                <li>
                  {{ item.details.join(', ') }}
                </li>
                <p v-if="item.notes">
                  <span class="text-body-bold-16 text-black"> หมายเหตุ: </span> ( {{ item.notes }} )
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
