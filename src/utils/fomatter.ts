export const formatPrice = (price: number, withSymbol = false) => {
  const fomatted = new Intl.NumberFormat('th-TH', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
  return withSymbol ? `฿${fomatted}` : fomatted
}
