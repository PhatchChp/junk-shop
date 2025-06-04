import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCategoryStore } from './category'

export const useMenuStore = defineStore('menu', () => {
  const isMobileMenuOpen = ref(false)
  const isAnimating = ref(false)
  const categoryStore = useCategoryStore()

  const menus = ref([
    { name: 'หน้าแรก', link: 'home' },
    {
      name: 'ของเก่าที่เรารับซื้อ',
      link: 'category',
      children: categoryStore.menuItems.map((item) => ({ name: item.label, type: item.value })),
    },
    { name: 'ราคาวันนี้', link: 'price-rate' },
    { name: 'บริการของเรา', link: 'service' },
    { name: 'คำถามที่พบบ่อย', link: 'faq' },
  ])

  const menuOpen = () => {
    if (isAnimating.value) return
    isMobileMenuOpen.value = true
    isAnimating.value = true

    // Reset animation state after transition
    setTimeout(() => {
      isAnimating.value = false
    }, 350)
  }

  const menuClose = () => {
    if (isAnimating.value) return
    isAnimating.value = true
    isMobileMenuOpen.value = false

    // Reset animation state after transition
    setTimeout(() => {
      isAnimating.value = false
    }, 300)
  }

  // Handle escape key and window resize
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen.value) {
      menuClose()
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 1024 && isMobileMenuOpen.value) {
      menuClose()
    }
  }

  return {
    menus,
    isMobileMenuOpen,
    isAnimating,
    menuOpen,
    menuClose,
    handleEscape,
    handleResize,
  }
})
