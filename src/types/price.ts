import type { CategoryType } from './category'

export type ItemPrice = {
  id: number
  name: string
  type: CategoryType
  price: number
  priceDiff: number
}

// Pick = เอาแค่บางตัวที่เลือก U
// Exclude = เอาทั้งหมดใน T ยกเว้นไม่เอาแค่ค่าที่เลือก U ใช้กับ union types เท่านั้น
// Partial = ทำให้ทุก key ใน T เป็น optional

export type GroupItemsPrice = Partial<Record<Exclude<CategoryType, 'all'>, ItemPrice[]>>
