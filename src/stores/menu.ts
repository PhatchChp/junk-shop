import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const isMobileMenuOpen = ref(false)

  const desktopMenus = ref([
    { name: 'หน้าแรก', link: 'home' },
    { name: 'ของเก่าที่เรารับซื้อ', link: 'category' },
    { name: 'ราคาวันนี้', link: 'price-rate' },
    { name: 'บริการของเรา', link: 'service' },
    { name: 'คำถามที่พบบ่อย', link: 'faq' },
  ])

  const mobileMenus = computed(() => [
    ...desktopMenus.value,
    { name: 'ติดต่อเรา', link: 'contact' },
    { name: 'เพิ่มเติม', link: 'more' },
  ])

  const menuOpen = () => (isMobileMenuOpen.value = true)
  const menuClose = () => (isMobileMenuOpen.value = false)

  return { desktopMenus, mobileMenus, menuOpen, menuClose }
})
