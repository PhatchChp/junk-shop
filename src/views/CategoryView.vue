<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { typeMap, type CategoryType } from '@/constants/categoryTypes'
import { useCategoryStore } from '@/stores/category'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import noResultImg from '@/components/icons/no-results.png'

const route = useRoute()
const router = useRouter()
const category = useCategoryStore()
const categoryMenu = category.menuItems

const routeType = computed(() => {
  return Array.isArray(route.params.type) ? route.params.type[0] : (route.params.type as string)
})

const displayItems = computed(() => {
  if (category.searchText && category.searchResult.length > 0) {
    return category.searchResult
  }
  return category.filteredItems
})

const onClickMenu = (type: string) => {
  if (routeType.value === type) {
    category.resetSearchText()
    category.setDisplayType(type as CategoryType)
  } else {
    router.push({ name: 'category', params: { type } })
  }
}

watch(
  () => routeType.value,
  (newType) => {
    const categoryType = Array.isArray(newType) ? newType[0] : newType //แปลงให้เหลือ string เดียว เอาตัวแรก ถ้ามีหลายตัว
    category.resetSearchText()

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
    <div class="flex">
      <aside
        class="flex flex-col basis-56 shrink-0 border-r border-gray-700 p-4 sticky top-28 h-fit self-start"
      >
        <div
          v-for="menu in categoryMenu"
          :key="menu.type"
          @click="onClickMenu(menu.type)"
          :class="[
            'hover:bg-primary-gray cursor-pointer rounded-md p-2 my-2',
            menu.type === routeType ? 'bg-primary-gray font-semibold' : '',
          ]"
        >
          {{ menu.name.th }}
        </div>
      </aside>

      <section class="flex flex-col flex-1 items-center p-8 gap-4 overflow-y-auto h-full">
        <h1 class="text-heading-36">ประเภทของเก่าที่เรารับซื้อ</h1>
        <SearchBar @searchText="category.handleSearch" />

        <div v-if="category.searchResult.length === 0 && category.searchText">
          <div class="text-center text-gray-500 mt-8">
            <img :src="noResultImg" alt="No results" class="w-32 h-32 mx-auto mb-4" />
            <p class="text-body-bold-20">ไม่พบรายการที่ตรงกับ "{{ category.searchText }}"</p>
            <p class="text-body-16 mt-2">ลองค้นหาด้วยคำอื่น หรือเลือกประเภทจากเมนูด้านซ้าย</p>
          </div>
        </div>

        <div v-else-if="displayItems.length > 0" class="self-start">
          <p class="text-body-bold-20">
            {{ category.searchText ? 'ค้นหา' : 'ประเภท' }}
            <span class="text-primary-orange">{{
              category.searchText || typeMap[category.displayType]
            }}</span>
          </p>
          <div v-for="item in displayItems" :key="item.name.en">
            <div class="max-w-3xl">
              <h4 class="text-body-bold-20 mt-8 pb-4">{{ item.name.th }}</h4>
              <div class="flex gap-8 flex-wrap text-gray-600">
                <p>
                  {{ item.details.join(', ') }}
                </p>
                <p v-if="item.notes">
                  <span class="text-body-bold-16 text-black"> หมายเหตุ: </span> ( {{ item.notes }} )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
