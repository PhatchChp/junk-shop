import { typeMap } from '@/constants/category/categoryTypesMap'

export const getCategoryLabel = (type: keyof typeof typeMap): string => {
  return typeMap[type]
}
