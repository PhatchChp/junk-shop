import { groupedItemsPrice } from '@/constants/itemsPrice/itemsPrice'
import type { CategoryType } from '@/types/category'
import type { ItemPrice } from '@/types/price'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const usePriceStore = defineStore('price', () => {
  const items = groupedItemsPrice

  const groupedEntries = computed(() => {
    return Object.entries(groupedItemsPrice).slice(0, 3) as [CategoryType, ItemPrice[]][]
  })

  return {
    items,
    groupedEntries,
  }
})
