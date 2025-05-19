<script setup lang="ts">
import Wave from '@/assets/wave.svg?component'
import CardIcon from '../cards/CardIcon.vue'
import JusticIcon from '@/components/icons/justic_icon.png'
import RecycleIcon from '@/components/icons/recycle_icon.png'
import ClockIcon from '@/components/icons/clock_icon.png'
import TruckIcon from '@/components/icons/truck_icon.png'
</script>

<template>
  <div class="relative">
    <Wave class="w-full text-primary-yellow" />
    <div class="flex justify-center items-center bg-primary-yellow">
      <p
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[80%] text-5xl font-bold text-center text-balance px-4 min-w-[250px] md:w-[400px]"
      >
        ทำไมต้องเลือกเรา
      </p>
    </div>
  </div>

  <div class="flex justify-center bg-primary-yellow py-40 md:py-20">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center w-full max-w-7xl gap-x-6 gap-y-10 sm:gap-x-8 md:gap-x-10 sm:px-6 lg:px-8"
    >
      <CardIcon :image-url="JusticIcon" title="ให้ราคาสูง ยุติธรรม" />
      <CardIcon :image-url="RecycleIcon" title="รับซื้อหลากหลาย ประเภท" />
      <CardIcon :image-url="ClockIcon" title="สะดวก รวดเร็ว รับเงินไว" />
      <CardIcon :image-url="TruckIcon" title="บริการรับถึงที่ฟรี ถ้ามีของเยอะ" />
    </div>
  </div>
</template>
