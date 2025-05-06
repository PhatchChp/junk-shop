import metals from '@/assets/images/front_shop.jpg'

export const categoryItems = [
  {
    imageUrl: metals,
    nameTH: 'โลหะ',
    nameEN: 'Metals',
    type: 'metals',
    details: ['เหล็กหนา', 'เหล็กบาง', 'เหล็กหล่อ', 'เหล็กเส้น', 'เหล็กแป๊ป'],
  },
  {
    imageUrl: metals,
    nameTH: 'กระดาษ',
    nameEN: 'Papers',
    type: 'papers',
    details: ['กระดาษแข็ง', 'กระดาษเศษ', 'หนังสือพิมพ์', 'กระดาษขาวดำ', 'กระดาษลัง', 'หนังสือ'],
  },
  {
    imageUrl: metals,
    nameTH: 'ขวด / ขวดพลาสติก',
    nameEN: 'Glass / Bottles',
    type: 'glass-bottles',
    details: [
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
    details: ['พลาสติกกรอบ', 'พลาสติกรวม', 'แกลลอนขุ่น'],
  },
  {
    imageUrl: metals,
    nameTH: 'ทองแดง',
    nameEN: 'Coppers',
    type: 'coppers',
    details: [
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
    details: ['พัดลม', 'แอร์เก่า', 'ตู้เย็น', 'ไมโครเวฟ', 'ตู้แช่', 'ทีวี'],
  },
  {
    imageUrl: metals,
    nameTH: 'กระป๋อง / สังกะสี',
    nameEN: 'Cans / Zinc',
    type: 'cans-zinc',
    details: ['กระป๋องน้ำอัดลม', 'กระป๋องเบียร์', 'กระป๋องสี', 'สังกะสี'],
  },
  {
    imageUrl: metals,
    nameTH: 'อะไหล่ / เศษซากรถ',
    nameEN: 'Spare part / Car scarp',
    type: 'spare-part',
    details: [
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
    details: ['สายยาง', 'ท่อน้ำ', 'โครงหลังคา', 'ชิ้นส่วนเครื่องจักร'],
  },
]

export type CategoryItem = {
  imageUrl: string
  nameTH: string
  nameEN: string
  type: string
  details: string[]
}
