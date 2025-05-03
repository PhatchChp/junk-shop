export const typeMap = {
  all: 'ทั้งหมด',
  metals: 'โลหะ',
  papers: 'กระดาษ',
  'glass-bottles': 'ขวด / ขวดพลาสติก',
  plastics: 'พลาสติก',
  coppers: 'ทองแดง',
  'electric-appliance': 'เครื่องใช้ไฟฟ้าเก่า',
  'cans-zinc': 'กระป๋อง / สังกะสี',
  'spare-part': 'อะไหล่ / เศษซากรถ',
} as const

export type CategoryType = keyof typeof typeMap
