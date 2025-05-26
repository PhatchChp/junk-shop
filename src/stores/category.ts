import { categoryItems } from '@/constants/category/categoryItems'
import { typeMap } from '@/constants/category/categoryTypesMap'
import type { CategoryItem, CategoryType } from '@/types/category'
import { getCategoryLabel } from '@/utils/categoryLabel'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Router } from 'vue-router'

export const useCategoryStore = defineStore('category', () => {
  const items = categoryItems
  const displayType = ref<CategoryType>('all')
  const searchText = ref<string>('')
  const searchResult = ref<CategoryItem[]>([])

  const fetchCategoryItems = [
    { name: { th: 'ทั้งหมด', en: 'All' }, type: 'all' },
    ...items.map(({ name: { th, en }, type }) => ({ name: { th, en }, type })),
  ]

  const menuItems = computed(() =>
    fetchCategoryItems.map((category) => ({
      label: category.name.th,
      value: category.type,
    })),
  )

  const navigateToType = (type: CategoryType, router: Router): void => {
    if (displayType.value === type) {
      resetSearchText()
      setDisplayType(type)
    } else {
      router.push({ name: 'category', params: { type } })
    }
  }

  const filteredItems = computed(() => {
    if (displayType.value === 'all') return items
    return items.filter((item) => item.type === displayType.value)
  })

  const searchItems = (search: string): CategoryItem[] => {
    const lowerSearch = search.toLowerCase()
    if (!lowerSearch) return []

    return items.filter((item) => {
      const itemType = item.type.toLowerCase()
      const typeLabel = getCategoryLabel(item.type as CategoryType)?.toLowerCase() || ''
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

  const handleSearch = (search: string): void => {
    const trimmedValue = search.trim()
    if (!trimmedValue) {
      resetSearchText()
      return
    }
    searchText.value = trimmedValue
    searchResult.value = searchItems(trimmedValue)
  }

  const resetSearchText = () => {
    searchText.value = ''
    searchResult.value = []
  }

  const setDisplayType = (type: CategoryType) => {
    displayType.value = type
  }

  const isCategoryType = (value: string): value is CategoryType => {
    return typeof value === 'string' && value in typeMap
  }

  const displayItems = computed(() => {
    if (searchText.value && searchResult.value.length > 0) {
      return searchResult.value
    }
    return filteredItems.value
  })

  const syncDisplayTypeFromRoute = (routeType: string | string[] | undefined) => {
    const categoryType = Array.isArray(routeType) ? routeType[0] : routeType
    resetSearchText()

    if (typeof categoryType === 'string' && isCategoryType(categoryType)) {
      setDisplayType(categoryType)
    } else {
      setDisplayType('all')
    }
  }

  return {
    items,
    displayType,
    menuItems,
    filteredItems,
    searchText,
    searchResult,
    displayItems,
    navigateToType,
    handleSearch,
    setDisplayType,
    resetSearchText,
    isCategoryType,
    syncDisplayTypeFromRoute,
  }
})
