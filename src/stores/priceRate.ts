import { groupedItemsPrice } from '@/constants/itemsPrice/itemsPrice'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useCategoryStore } from '@/stores/category'
import type { CategoryType } from '@/types/category'
import type { ItemPrice } from '@/types/priceRate'
import type { Router } from 'vue-router'
import { typeMap } from '@/constants/category/categoryTypesMap'

export const usePriceRateStore = defineStore('priceRate', () => {
  const categoryStore = useCategoryStore()
  const items = ref(groupedItemsPrice)
  const displayType = ref(<CategoryType>'all')

  const menuItems = computed(() => categoryStore.menuItems)

  const computedItems = computed(() => {
    if (displayType.value === 'all') {
      return Object.entries(items.value).flatMap(([type, items]) =>
        items.map((item) => ({ ...item, type })),
      )
    }
    return items.value[displayType.value] || []
  })

  // Items are grouped by category and the first three items are displayed
  const groupedEntries = computed(() => {
    return Object.entries(groupedItemsPrice).slice(0, 3) as [CategoryType, ItemPrice[]][]
  })

  const navigateToCategory = (category: CategoryType, route: Router) => {
    route.push({ name: 'price-rate', params: { type: category } })
  }

  const setDisplayType = (type: CategoryType) => {
    displayType.value = type
  }

  const isCategoryType = (value: string): value is CategoryType => {
    return typeof value === 'string' && value in typeMap
  }

  const syncDisplayTypeFromRoute = (routeType: string | string[] | undefined) => {
    const categoryType = Array.isArray(routeType) ? routeType[0] : routeType

    if (typeof categoryType === 'string' && isCategoryType(categoryType)) {
      setDisplayType(categoryType)
    } else {
      setDisplayType('all')
    }
  }

  return {
    computedItems,
    menuItems,
    displayType,
    groupedEntries,
    navigateToCategory,
    syncDisplayTypeFromRoute,
  }
})
