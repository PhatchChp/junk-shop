import type { typeMap } from '@/constants/category/categoryTypesMap'

export type CategoryType = keyof typeof typeMap

export type CategoryItem = {
  imageUrl: string
  name: { th: string; en: string }
  type: string
  details: string[]
  notes?: string
}

export type CategoryMenuItem = {
  name: { th: string; en: string }
  type: string
}
