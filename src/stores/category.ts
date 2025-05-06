import { defineStore } from 'pinia'

import { typeMap, type CategoryType } from '@/constants/categoryTypes'
import { computed, ref } from 'vue'
import { categoryItems, type CategoryItem } from '@/constants/categoryItems'

export const useCategoryStore = defineStore('category', () => {
  const items = categoryItems
  const displayType = ref('all' as CategoryType)
  const searchText = ref('')
  const searchResult = ref<CategoryItem[]>([])

  const setDisplayType = (type: CategoryType) => {
    displayType.value = type
  }

  const menuItems = computed(() => {
    return [
      { nameTH: 'ทั้งหมด', nameEN: 'All', type: 'all' },
      ...items.map(({ nameTH, nameEN, type }) => ({ nameTH, nameEN, type })),
    ]
  })

  const filteredItems = computed(() => {
    if (displayType.value === 'all') return items
    return items.filter((item) => item.type === displayType.value)
  })

  const searchItems = (search: string) => {
    return items
      .map((item) => ({ ...item, nameEN: item.nameEN.toLowerCase() }))
      .filter(
        (item) =>
          item.nameTH.includes(search) ||
          item.nameEN.includes(search.toLocaleLowerCase()) ||
          item.details.some((d) => d.includes(search)),
      )
  }

  const handleSearch = (search: string) => {
    searchText.value = search
    searchResult.value = searchItems(searchText.value)
  }

  const isCategoryType = (value: string): value is CategoryType => {
    return value in typeMap
  }

  return {
    items,
    displayType,
    menuItems,
    filteredItems,
    searchText,
    searchResult,
    handleSearch,
    setDisplayType,
    isCategoryType,
  }
})
