<script setup lang="ts">
import { usePriceRateStore } from '@/stores/priceRate'
import { Triangle } from 'lucide-vue-next'

const priceRateStore = usePriceRateStore()
</script>

<template>
  <div
    v-for="item in priceRateStore.computedItems"
    :key="item.id || item.name"
    class="flex flex-col justify-center items-start sm:flex-row sm:justify-between gap-4 sm:gap-10 border-b-1 p-4 border-gray-300 w-full"
  >
    <div class="flex flex-col items-start">
      <p class="text-body-bold-18">{{ item.name }}</p>
      <p class="text-body-16 text-gray">{{ item.type }}</p>
    </div>
    <div class="flex justify-end items-baseline gap-2">
      <Triangle
        v-if="item.priceDiff !== 0"
        :size="16"
        :fill="item.priceDiff > 0 ? '#12B77F' : '#BCBCBC'"
        :color="item.priceDiff > 0 ? '#12B77F' : '#BCBCBC'"
        :class="['transition-transform', item.priceDiff < 0 && 'rotate-180']"
      />
      <p class="text-body-bold-18">{{ item.price }}</p>
    </div>
  </div>
</template>
