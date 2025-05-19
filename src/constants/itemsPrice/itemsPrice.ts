import type { GroupItemsPrice } from '@/types/price'

export const groupedItemsPrice: GroupItemsPrice = {
  metals: [
    {
      id: 1,
      name: 'เหล็กหนา',
      type: 'metals',
      price: 12,
      priceDiff: 2,
    },
    {
      id: 2,
      name: 'เหล็กบาง',
      type: 'metals',
      price: 9.77,
      priceDiff: 0.7,
    },
    {
      id: 3,
      name: 'เหล็กหล่อ',
      type: 'metals',
      price: 13.3,
      priceDiff: -4,
    },
  ],
  coppers: [
    {
      id: 4,
      name: 'ทองแดงเบอร์ 2',
      type: 'coppers',
      price: 220,
      priceDiff: 10,
    },
    {
      id: 5,
      name: 'ทองแดงเบอร์ 1',
      type: 'coppers',
      price: 240,
      priceDiff: -10,
    },
  ],
  zincs: [
    {
      id: 6,
      name: 'สังกะสี',
      type: 'zincs',
      price: 4,
      priceDiff: 0,
    },
  ],
  plastics: [
    {
      id: 2,
      name: 'พลาสติกขาว',
      type: 'plastics',
      price: 5,
      priceDiff: 0,
    },
  ],
}
