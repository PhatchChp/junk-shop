<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { RouterLink } from 'vue-router'
import CardImage from '../cards/CardImage.vue'
import PrimaryButton from '../buttons/PrimaryButton.vue'

const category = useCategoryStore()
const routeName = 'category'
</script>

<template>
  <section class="w-full py-16 bg-primary-gray my-20">
    <div class="container mx-auto px-4 max-w-screen-xl text-center">
      <!-- Header with animation -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
      >
        <h2 class="text-heading-36 md:text-heading-48 font-semibold mb-10">
          ประเภทของเก่าที่เรารับซื้อ
        </h2>
      </div>

      <!-- Cards Grid with staggered animation -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
      >
        <div
          v-for="(item, index) in category.items.slice(0, 8)"
          :key="item.type"
          v-motion
          :initial="{ opacity: 0, y: 60, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              delay: index * 150,
              duration: 600,
              ease: 'easeOut',
            },
          }"
          class="w-full max-w-[280px]"
        >
          <RouterLink
            :to="{ name: routeName, params: { type: item.type } }"
            class="hover:scale-[1.03] transition-transform duration-200 block"
          >
            <CardImage :image-url="item.imageUrl" :title="item.name.th" :subtitle="item.name.en" />
          </RouterLink>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1200,
            duration: 600,
            ease: 'easeOut',
          },
        }"
        class="inline-flex items-center mt-10"
      >
        <PrimaryButton name="ดูทั้งหมด" :to="{ name: 'category', params: { type: 'all' } }" />
      </div>
    </div>
  </section>
</template>
