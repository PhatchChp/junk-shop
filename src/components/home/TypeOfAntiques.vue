<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import CardImage from '../CardImage.vue'
import { RouterLink } from 'vue-router'

const category = useCategoryStore()
const routeName = 'category'
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-6 my-20 p-8 bg-primary-gray rounded-2xl"
  >
    <h1 class="text-heading-48 text-center">ประเภทของเก่าที่เรารับซื้อ</h1>
    <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="item in category.items" :key="item.nameEN">
        <RouterLink :to="{ name: routeName, params: { type: item.type } }">
          <CardImage :image-url="item.imageUrl" :title="item.nameTH" :subtitle="item.nameEN" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
