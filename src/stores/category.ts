import { defineStore } from 'pinia'

import { typeMap, type CategoryType } from '@/constants/categoryTypes'
import { computed, ref } from 'vue'
import { categoryItems, type CategoryItem } from '@/constants/categoryItems'

export const useCategoryStore = defineStore('category', () => {
  const items = categoryItems
  const displayType = ref('all' as CategoryType)
  const searchText = ref('')
  const searchResult = ref<CategoryItem[]>([])

  const menuItems = computed(() => {
    return [
      { name: { th: 'ทั้งหมด', en: 'All' }, type: 'all' },
      ...items.map(({ name: { th, en }, type }) => ({ name: { th, en }, type })),
    ]
  })

  const filteredItems = computed(() => {
    if (displayType.value === 'all') return items
    return items.filter((item) => item.type === displayType.value)
  })

  const searchItems = (search: string) => {
    const lowerSearch = search.toLowerCase()
    return items.filter((item) => {
      const itemType = item.type.toLowerCase()
      const typeLabel = typeMap[item.type as CategoryType]?.toLowerCase() || ''
      const nameTh = item.name.th.toLowerCase()
      const nameEn = item.name.en.toLowerCase()
      const details = item.details.map((d) => d.toLowerCase())

      return (
        itemType.includes(lowerSearch) ||
        typeLabel.includes(lowerSearch) ||
        nameTh.includes(lowerSearch) ||
        nameEn.includes(lowerSearch) ||
        details.some((detail) => detail.includes(lowerSearch))
      )
    })
  }

  const handleSearch = (search: string) => {
    searchText.value = search.trim()
    searchResult.value = searchItems(searchText.value)
  }

  const resetSearchText = () => {
    searchText.value = ''
    searchResult.value = []
  }

  const setDisplayType = (type: CategoryType) => {
    displayType.value = type
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
    resetSearchText,
    isCategoryType,
  }
})
