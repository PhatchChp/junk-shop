import { defineStore } from 'pinia'
import metals from '@/assets/images/front_shop.jpg'
import { typeMap } from '@/constants/categoryTypes'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    items: [
      {
        imageUrl: metals,
        title: 'โลหะ',
        subtitle: 'Metals',
        type: 'metals',
      },
      {
        imageUrl: metals,
        title: 'กระดาษ',
        subtitle: 'Papers',
        type: 'papers',
      },
      {
        imageUrl: metals,
        title: 'ขวด / ขวดพลาสติก',
        subtitle: 'Glass / Bottles',
        type: 'glass-bottles',
      },
      {
        imageUrl: metals,
        title: 'พลาสติก',
        subtitle: 'Plastics',
        type: 'plastics',
      },
      {
        imageUrl: metals,
        title: 'ทองแดง',
        subtitle: 'Coppers',
        type: 'coppers',
      },
      {
        imageUrl: metals,
        title: 'เครื่องใช้ไฟฟ้าเก่า',
        subtitle: 'Old electric appliance',
        type: 'electric-appliance',
      },
      {
        imageUrl: metals,
        title: 'กระป๋อง / สังกะสี',
        subtitle: 'Cans / Zinc',
        type: 'cans-zinc',
      },
      {
        imageUrl: metals,
        title: 'อะไหล่ / เศษซากรถ',
        subtitle: 'Spare part / Car scarp',
        type: 'spare-part',
      },
    ],
    typeMap,
  }),
  getters: {},
  actions: {},
})
