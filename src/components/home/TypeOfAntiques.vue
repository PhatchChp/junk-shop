<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper/modules'
import { useCategoryStore } from '@/stores/category'
import { RouterLink } from 'vue-router'
import CardImage from '../cards/CardImage.vue'
import 'swiper/css'
import 'swiper/css/scrollbar'

const category = useCategoryStore()
const routeName = 'category'
const modules = [Scrollbar]
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-6 my-20 p-8 bg-primary-gray rounded-2xl"
  >
    <h1 class="text-heading-36 md:text-heading-48 text-center">ประเภทของเก่าที่เรารับซื้อ</h1>
    <div class="w-full max-w-screen-xl px-4">
      <Swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="16"
        :grab-cursor="true"
        :scrollbar="{ draggable: true }"
        class="mySwiper"
      >
        <SwiperSlide v-for="item in category.items" :key="item.type" class="!w-[280px] mb-10">
          <RouterLink :to="{ name: routeName, params: { type: item.type } }">
            <CardImage :image-url="item.imageUrl" :title="item.name.th" :subtitle="item.name.en" />
          </RouterLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
