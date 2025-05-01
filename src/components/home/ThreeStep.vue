<script setup lang="ts">
import pickup from '@/components/icons/pickup_icon.png'
import box from '@/components/icons/box_scale.png'
import payment from '@/components/icons/payment-method_icon.png'
import rightArrow from '@/components/icons/right-arrow.png'
import { onMounted, onUnmounted, ref } from 'vue'

const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})

const steps = ref([
  {
    icon: pickup,
    title: '1. นำของเก่ามาให้เรา',
    description: 'นำของเก่ามาที่ร้าน เรายินดีไปรับถึงที่ฟรี! หากมีของจำนวนมาก',
  },
  {
    icon: box,
    title: '2. เราชั่งน้ำหนัก',
    description: 'ชั่งน้ำหนัก ประเมินราคา โปร่งใส ยุติธรรม ให้ราคาสูง',
  },
  {
    icon: payment,
    title: '3. รับเงินสด',
    description: 'รับเงินสดทันที่ หรือโอนพร้อมเพย์ สะดวกรวดเร็ว',
  },
])
</script>

<template>
  <div class="flex flex-col justify-center items-center mt-16">
    <h1 class="text-heading-48 mb-12">3 ขั้นตอนง่ายๆ</h1>

    <div v-if="!isMobile" class="flex justify-center items-start gap-8">
      <template v-for="(step, index) in steps" :key="index">
        <!-- Box step -->

        <div class="flex flex-col items-center text-center gap-4">
          <div class="border border-gray-200 rounded-2xl p-6">
            <img :src="step.icon" alt="icon" class="w-[160px] h-auto object-contain" />
          </div>

          <div class="text-body-bold-24">{{ step.title }}</div>
          <div class="text-body-16 max-w-xs text-inherit">{{ step.description }}</div>
        </div>
        <!-- Icon Arrow except last one -->
        <div v-if="index < steps.length - 1" class="flex items-center">
          <img
            :src="rightArrow"
            alt="Arrow icon"
            class="w-[60px] h-auto object-contain translate-y-20"
          />
        </div>
      </template>
    </div>

    <!-- Box 3 Step Mobile -->
    <div v-else class="flex flex-col justify-center items-center gap-4">
      <template v-for="(step, index) in steps" :key="step.title">
        <div class="border border-gray-200 rounded-2xl p-6">
          <img :src="step.icon" alt="icon" class="w-[160px] h-auto object-contain" />
        </div>
        <div class="text-body-bold-24">{{ step.title }}</div>
        <div class="text-body-16 max-w-[240px] text-center">{{ step.description }}</div>
        <img
          v-if="index < steps.length - 1"
          :src="rightArrow"
          alt="Arrow icon"
          class="rotate-90 w-[60px] h-auto object-contain"
        />
      </template>
    </div>
  </div>
</template>
