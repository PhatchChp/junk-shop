<script setup lang="ts">
import NoResult from '@/components/NoResult.vue'
import { useCategoryStore } from '@/stores/category'
import { getCategoryLabel } from '@/utils/categoryLabel'

const category = useCategoryStore()
</script>

<template>
  <div v-if="category.searchResult.length === 0 && category.searchText">
    <NoResult :text="category.searchText" />
  </div>

  <div v-else-if="category.displayItems" class="self-start mb-8 md:mb-0">
    <p class="text-body-bold-20">
      {{ category.searchText ? 'ค้นหา' : 'ประเภท' }}
      <span class="text-primary-orange">{{
        category.searchText || getCategoryLabel(category.displayType)
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
</template>
