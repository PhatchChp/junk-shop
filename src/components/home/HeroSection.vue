<script setup lang="ts">
import OutlinedButton from '@/components/buttons/OutlinedButton.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
    <!-- LEFT: Content -->
    <div class="flex flex-col text-center space-y-10 mx-auto">
      <!-- Title -->
      <div class="space-y-4">
        <h1 class="text-heading-48">เรารับซื้อของเก่าให้ราคาสูง</h1>
        <h2 class="text-heading-36 text-primary-orange">
          <span class="inline md:block">มาเปลี่ยนของเก่าให้เป็นเงินสด</span>
          <span class="inline md:block"> ง่ายๆ กับเรา</span>
        </h2>
      </div>

      <!-- Subtitle -->
      <p class="text-body-20 max-w-full sm:max-w-2xl md:max-w-xl lg:max-w-2xl text-pretty">
        <span class="text-body-bold-20">กุ้งรับซื้อของเก่า</span>
        &nbsp;เราคือร้านรับซื้อของเก่าที่มีความน่าเชื่อถือ พร้อมประสบการณ์ที่มากกว่า 20+ ปี
        เราพร้อมให้บริการทุกท่านอย่างเป็นกันเองและสะดวกสบาย ไม่ว่าคุณจะมี เหล็ก พลาสติก ขวดน้ำ
        ทองแดง กระดาษ อลูมิเนียม สายยาง ประป๋อง สังกะสี หรือของเก่าอื่นๆ อีกมากมาย <br />
        — เรารับหมด!
      </p>

      <!-- Button -->
      <div class="flex justify-center items-center gap-4 mt-4">
        <OutlinedButton name="ติดต่อเรา" :to="{ name: 'contact' }" />
        <PrimaryButton name="เพิ่มเติม" :to="{ name: 'more' }" />
      </div>
    </div>

    <!-- RIGHT: Image Hero -->
    <div class="flex items-center justify-center lg:m-0">
      <img
        src="/src/assets/images/hero_1.jpg"
        alt="Hero Banner"
        class="mx-auto w-full sm:h-[30rem] lg:h-[560px] xl:h-[30rem] object-cover rounded-xl shadow"
      />
    </div>
  </div>
</template>
