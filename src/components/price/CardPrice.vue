<script setup lang="ts">
import { typeMap, type CategoryType } from '@/constants/categoryTypes'
import { formatPrice } from '@/utils/fomatter'
import { Triangle } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    name: string
    type: CategoryType
    price: number
    priceDiff?: number
  }>(),
  { priceDiff: 0 },
)
</script>

<template>
  <div class="bg-white rounded-2xl shadow-xl p-4 min-w-72 max-w-sm">
    <div
      class="flex flex-col justify-center items-start sm:flex-row sm:justify-between gap-4 sm:gap-10 border-b-1 p-4 border-gray-300"
    >
      <div class="flex flex-col items-start">
        <p class="text-body-bold-18">{{ props.name }}</p>
        <p class="text-body-16 text-gray">{{ typeMap[props.type] }}</p>
      </div>
      <div class="flex justify-end items-baseline gap-2">
        <Triangle
          v-if="priceDiff !== 0"
          :size="16"
          :fill="priceDiff > 0 ? '#12B77F' : '#BCBCBC'"
          :color="priceDiff > 0 ? '#12B77F' : '#BCBCBC'"
          :class="[priceDiff < 0 && 'rotate-180']"
        />
        <p class="text-body-bold-18">{{ formatPrice(props.price, priceDiff === 0) }}</p>
      </div>
    </div>
  </div>
</template>
