<script setup lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import CardPrice from '@/components/priceRate/CardPriceRate.vue'
import { usePriceRateStore } from '@/stores/priceRate'
import { getCategoryLabel } from '@/utils/categoryLabel'

const priceRate = usePriceRateStore()
</script>

<template>
  <div class="flex flex-col justify-center items-center py-10 gap-8 bg-primary-gray">
    <h1 class="text-heading-48 text-center my-4">เรทราคาวันนี้</h1>
    <div class="grid grid-cols-1 lg:grid-cols-3 content-center justify-items-center gap-8">
      <div v-for="[type, item] in priceRate.groupedEntries" :key="type">
        <h3
          class="bg-white rounded-t-2xl py-2 border-b border-gray-200 text-center text-body-bold-20"
        >
          {{ getCategoryLabel(type) || 'ไม่ทราบประเภท' }}
        </h3>
        <CardPrice :type="type" :items="item" />
      </div>
    </div>
    <PrimaryButton :to="{ name: 'price-rate' }" name="ดูราคาทั้งหมด" class="font-bold" />
  </div>
</template>
