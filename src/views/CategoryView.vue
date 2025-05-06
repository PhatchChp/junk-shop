<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { typeMap } from '@/constants/categoryTypes'
import MainLayout from '@/layouts/MainLayout.vue'
import { useCategoryStore } from '@/stores/category'
import { watch, watchEffect } from 'vue'

import { useRoute, RouterLink } from 'vue-router'

const category = useCategoryStore()
const route = useRoute()

const categoryMenu = category.menuItems
const displayType = category.displayType

watchEffect(() => displayType)

watch(
  () => route.params.type,
  (newType) => {
    const categoryType = Array.isArray(newType) ? newType[0] : newType //แปลงให้เหลือ string เดียว เอาตัวแรก ถ้ามีหลายตัว

    if (typeof categoryType === 'string' && category.isCategoryType(categoryType)) {
      return category.setDisplayType(categoryType)
    } else {
      return category.setDisplayType('all')
    }
  },
  { immediate: true },
)
</script>

<template>
  <MainLayout>
    <div class="flex justify-between">
      <aside class="flex flex-col flex-none border-r border-gray-700 p-4 mb-10">
        <RouterLink
          v-for="menu in categoryMenu"
          :key="menu.type"
          :to="{ name: 'category', params: { type: menu.type } }"
          :class="[
            'hover:bg-primary-gray rounded-md p-2 my-2',
            menu.type === route.params.type ? 'bg-primary-gray font-semibold' : '',
          ]"
        >
          {{ menu.nameTH }}
        </RouterLink>
      </aside>

      <section class="flex flex-1 flex-col items-center px-8 gap-4">
        <h1 class="text-heading-36">ประเภทของเก่าที่เรารับซื้อ</h1>
        <SearchBar @searchText="category.handleSearch" />

        <div v-if="category.searchResult.length === 0 && category.searchText">
          <div class="text-center text-gray-500 mt-8">
            <img
              src="/src/components/icons/no-results.png"
              alt="No results"
              class="w-32 h-32 mx-auto mb-4"
            />
            <p class="text-body-bold-20">ไม่พบรายการที่ตรงกับ "{{ category.searchText }}"</p>
            <p class="text-body-16 mt-2">ลองค้นหาด้วยคำอื่น หรือเลือกประเภทจากเมนูด้านซ้าย</p>
          </div>
        </div>

        <div v-else-if="category.searchResult.length > 0" class="self-start">
          <div v-for="item in category.searchResult" :key="item.nameEN">
            <h4 class="text-body-24">{{ item.nameTH }}</h4>
            <p v-for="detail in item.details" :key="detail">{{ detail }}</p>
          </div>
        </div>

        <div v-else class="self-start mb-10">
          <p class="text-body-bold-20">
            ประเภท
            <span class="text-primary-orange">{{ typeMap[category.displayType] }}</span>
          </p>
          <div v-for="item in category.filteredItems" :key="item.nameEN">
            <h4 class="text-body-bold-20 mt-8 pb-4">{{ item.nameTH }}</h4>
            <div class="flex gap-8">
              <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
