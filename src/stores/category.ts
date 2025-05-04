import { defineStore } from 'pinia'
import metals from '@/assets/images/front_shop.jpg'
import { typeMap } from '@/constants/categoryTypes'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    items: [
      {
        imageUrl: metals,
        nameTH: 'โลหะ',
        nameEN: 'Metals',
        type: 'metals',
        detail: ['เหล็กหนา', 'เหล็กบาง', 'เหล็กหล่อ', 'เหล็กเส้น', 'เหล็กแป๊ป'],
      },
      {
        imageUrl: metals,
        nameTH: 'กระดาษ',
        nameEN: 'Papers',
        type: 'papers',
        detail: ['กระดาษแข็ง', 'กระดาษเศษ', 'หนังสือพิมพ์', 'กระดาษขาวดำ', 'กระดาษลัง', 'หนังสือ'],
      },
      {
        imageUrl: metals,
        nameTH: 'ขวด / ขวดพลาสติก',
        nameEN: 'Glass / Bottles',
        type: 'glass-bottles',
        detail: [
          'ขวดแก้ว',
          'ขวดพลาสติก',
          'ขวดน้ำมันพืช',
          'ขวดแชมพู',
          'ขวดน้ำยาล้างจาน',
          'ขวดน้ำยาล้างห้องน้ำ',
          'ฯลฯ',
        ],
      },
      {
        imageUrl: metals,
        nameTH: 'พลาสติก',
        nameEN: 'Plastics',
        type: 'plastics',
        detail: ['พลาสติกกรอบ', 'พลาสติกรวม', 'แกลลอนขุ่น'],
      },
      {
        imageUrl: metals,
        nameTH: 'ทองแดง',
        nameEN: 'Coppers',
        type: 'coppers',
        detail: [
          'เส้นใหญ่ - เบอร์ 1',
          'เส้นใหญ่ - เบอร์ 2',
          'เส้นเล็ก - เบอร์ 3',
          'เส้นเล็ก - เบอร์ 4',
          'ทองแดงเผา',
          'ทองแดงไม่เผา',
        ],
      },
      {
        imageUrl: metals,
        nameTH: 'เครื่องใช้ไฟฟ้าเก่า',
        nameEN: 'Old electric appliance',
        type: 'electric-appliance',
        detail: ['พัดลม', 'แอร์เก่า', 'ตู้เย็น', 'ไมโครเวฟ', 'ตู้แช่', 'ทีวี'],
      },
      {
        imageUrl: metals,
        nameTH: 'กระป๋อง / สังกะสี',
        nameEN: 'Cans / Zinc',
        type: 'cans-zinc',
        detail: ['กระป๋องน้ำอัดลม', 'กระป๋องเบียร์', 'กระป๋องสี', 'สังกะสี'],
      },
      {
        imageUrl: metals,
        nameTH: 'อะไหล่ / เศษซากรถ',
        nameEN: 'Spare part / Car scarp',
        type: 'spare-part',
        detail: [
          'หม้อน้ำรถยนต์',
          'แผงวงจร',
          'คอมพิวเตอร์',
          'อะไหล่รถ',
          'ซากรถยนต์',
          'จักรยาน',
          'มอเตอร์ไซค์',
          'เศษอะไหล่ต่างๆ',
        ],
      },
      {
        imageUrl: metals,
        nameTH: 'อื่นๆ',
        nameEN: 'Another',
        type: 'another',
        detail: ['สายยาง', 'ท่อน้ำ', 'โครงหลังคา', 'ชิ้นส่วนเครื่องจักร'],
      },
    ],
    typeMap,
  }),
  getters: {},
  actions: {},
})
