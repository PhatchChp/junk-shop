<script setup lang="ts">
import CardImage from '../CardImage.vue'
import metals from '@/assets/images/front_shop.jpg'
import { RouterLink } from 'vue-router'

const typeOfAntiques = [
  {
    imageUrl: metals,
    title: 'เหล็ก',
    subtitle: 'Metals',
    link: 'category',
  },
  {
    imageUrl: metals,
    title: 'กระดาษ',
    subtitle: 'Papers',
    link: '',
  },
  {
    imageUrl: metals,
    title: 'ขวด / ขวดพลาสติก',
    subtitle: 'Glass / Bottles',
    link: '',
  },
  {
    imageUrl: metals,
    title: 'พลาสติก',
    subtitle: 'Plastics',
    link: '',
  },
  {
    imageUrl: metals,
    title: 'ทองแดง',
    subtitle: 'Coppers',
    link: '',
  },
  {
    imageUrl: metals,
    title: 'เครื่องใช้ไฟฟ้าเก่า',
    subtitle: 'Old electric appliance',
    link: '',
  },
  {
    imageUrl: metals,
    title: 'กระป๋อง / สังกะสี',
    subtitle: 'Cans / Zinc',
    link: '',
  },
  {
    imageUrl: metals,
    title: 'อะไหล่ / เศษซากรถ',
    subtitle: 'Spare part / Car scarp',
    link: '',
  },
]
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-6 my-20 p-8 bg-primary-gray rounded-2xl"
  >
    <h1 class="text-heading-48">ประเภทของเก่าที่เรารับซื้อ</h1>
    <div class="grid grid-cols-4 gap-6">
      <div v-for="item in typeOfAntiques" :key="item.title">
        <RouterLink :to="{ name: item.link }">
          <CardImage :image-url="item.imageUrl" :title="item.title" :subtitle="item.subtitle" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
