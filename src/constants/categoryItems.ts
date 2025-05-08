import metals from '@/assets/images/front_shop.jpg'

export const categoryItems = [
  {
    imageUrl: metals,
    name: { th: 'โลหะ', en: 'Metals' },
    type: 'metals',
    details: ['เหล็กหนา', 'เหล็กบาง', 'เหล็กหล่อ', 'เหล็กเส้น', 'เหล็กแป๊ป'],
  },
  {
    imageUrl: metals,
    name: { th: 'กระดาษ', en: 'Papers' },
    type: 'papers',
    details: ['กระดาษแข็ง', 'กระดาษเศษ', 'หนังสือพิมพ์', 'กระดาษขาวดำ', 'กระดาษลัง', 'หนังสือ'],
  },
  {
    imageUrl: metals,
    name: { th: 'ขวด / ขวดพลาสติก', en: 'Glass / Bottles' },
    type: 'bottles',
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
    name: { th: 'พลาสติก', en: 'Plastics' },
    type: 'plastics',
    details: ['พลาสติกกรอบ', 'พลาสติกรวม', 'แกลลอนขุ่น'],
  },
  {
    imageUrl: metals,
    name: { th: 'ทองแดง', en: 'Coppers' },
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
    name: { th: 'เครื่องใช้ไฟฟ้าเก่า', en: 'Old electronics' },
    type: 'electronics',
    details: [
      'พัดลม',
      'แอร์',
      'ตู้เย็น',
      'ไมโครเวฟ',
      'เครื่องซักผ้า',
      'หม้อหุงข้าว',
      'เครื่องทำน้ำอุ่น',
      'เตาแก๊ส',
      'เตารีด',
      'ตู้แช่',
      'ทีวี',
      'คอมพิวเตอร์',
      'หน้าจอ',
      'อุปกรณ์อิเล็กทรอนิก',
    ],
  },
  {
    imageUrl: metals,
    name: { th: 'กระป๋อง', en: 'Cans' },
    type: 'cans',
    details: ['กระป๋องน้ำอัดลม', 'กระป๋องเบียร์', 'กระป๋องสี'],
  },
  {
    imageUrl: metals,
    name: { th: 'สังกะสี', en: 'Zincs' },
    type: 'zincs',
    details: ['สังกะสี'],
  },
  {
    imageUrl: metals,
    name: { th: 'อลูมิเนียม', en: 'Aluminum' },
    type: 'aluminum',
    details: ['อลูมิเนียม'],
  },
  {
    imageUrl: metals,
    name: { th: 'สแตนเลส', en: 'Stainless' },
    type: 'stainless',
    details: ['สแตนเลส'],
  },
  {
    imageUrl: metals,
    name: { th: 'ลังเบียร์ / ลังเหล้า', en: 'Beer Crate / Liquor Crate' },
    type: 'crates',
    details: [
      'เบียร์ช้าง',
      'เบียร์ลีโอ',
      'เบียร์สิงห์',
      'เบียร์ไฮนีเก้น',
      'เบียร์อื่นๆ',
      'เหล้าหงส์ทอง',
      'เหล้าแสงโสม',
      'เหล้าแม่โขง',
      'เหล้า 285',
      'เหล้าอื่นๆ',
    ],
    notes: 'รับเฉพาะลังที่มีขวดเปล่าครบ 12 ขวด ถ้าไม่ครบนับเป็นขวดแก้ว',
  },
  {
    imageUrl: metals,
    name: { th: 'อื่นๆ', en: 'Another' },
    type: 'another',
    details: [
      'หม้อน้ำรถยนต์',
      'แบตเตอรี่รถยนต์',
      'แบตเตอรี่แห้ง',
      'แผงวงจร',
      'อะไหล่รถ',
      'เศษซากรถยนต์',
      'จักรยาน',
      'มอเตอร์ไซค์',
      'เศษอะไหล่ต่างๆ',
      'สายไฟ',
      'เปลือกสายไฟ',
      'สายยาง',
      'ท่อน้ำ',
      'ชิ้นส่วนเครื่องจักร',
    ],
  },
]

export type CategoryItem = {
  imageUrl: string
  name: { th: string; en: string }
  type: string
  details: string[]
  notes?: string
}
