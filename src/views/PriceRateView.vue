<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import CardPrice from '@/components/price/CardPrice.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center py-10 gap-8 bg-primary-gray">
    <h1 class="text-heading-48 text-center my-4">เรทราคาวันนี้</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardPrice name="เหล็ก" type="metals" :price="123" :priceDiff="5" />
      <CardPrice name="ทองแดงเบอร์ 3" type="coppers" :price="13" :priceDiff="10" />
      <CardPrice name="สังกะสี" type="zincs" :price="123" />
    </div>
    <PrimaryButton :to="{ name: 'price' }" name="ดูราคาทั้งหมด" class="font-bold" />
  </div>
</template>
