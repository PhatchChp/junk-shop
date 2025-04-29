<script setup lang="ts">
import OutlinedButton from '@/components/buttons/OutlinedButton.vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const desktopMenus = ref([
  { name: 'หน้าแรก', link: 'home' },
  { name: 'ของเก่าที่เรารับซื้อ', link: 'category' },
  { name: 'ราคาวันนี้', link: 'price' },
  { name: 'บริการของเรา', link: 'service' },
  { name: 'คำถามที่พบบ่อย', link: 'ask' },
])

const mobileMenus = computed(() => [
  ...desktopMenus.value,
  { name: 'ติดต่อเรา', link: 'contact' },
  { name: 'เพิ่มเติม', link: 'more' },
])

const isMobileMenuOpen = ref(false)

const menuOpen = () => (isMobileMenuOpen.value = true)
const menuClose = () => (isMobileMenuOpen.value = false)
</script>

<template>
  <div class="bg-white max-w-screen-2xl mx-auto fixed top-0 left-0 right-0 z-50 lg:px-4">
    <div
      class="w-full flex justify-between items-center border border-gray-200 rounded-md shadow-xs px-6 lg:my-4"
    >
      <!-- Logo -->
      <span>
        <RouterLink :to="{ name: 'home' }"
          ><img class="h-[74px] object-contain" src="../assets/logo.svg" alt="Logo"
        /></RouterLink>
      </span>

      <!-- Menus for large screens -->
      <ul class="hidden lg:flex justify-between items-center gap-4 xl:gap-12">
        <li
          v-for="menu in desktopMenus"
          :key="menu.name"
          :class="`${menu.link === route.name ? 'border-primary-orange border-b-2 p-2' : ''}  hover:text-primary-orange`"
        >
          <RouterLink :to="{ name: menu.link }">{{ menu.name }}</RouterLink>
        </li>

        <!-- Buttons -->
        <div class="flex gap-4 ml-4 2xl:ml-20">
          <OutlinedButton name="ติดต่อเรา" :to="{ name: 'contact' }" />
          <PrimaryButton name="เพิ่มเติม" :to="{ name: 'more' }" />
        </div>
      </ul>

      <!-- Mobile Hamburger -->
      <div class="lg:hidden flex items-center">
        <button @click="menuOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="lg:hidden fixed inset-0 z-40"
      :class="isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <!-- Background Black -->
      <div
        class="absolute inset-0 bg-black/40 transition-opacity duration-300"
        :class="isMobileMenuOpen ? 'opacity-100' : 'opacity-0'"
        @click="menuClose"
      ></div>

      <!-- Menu slide-in from left -->
      <div
        class="absolute top-0 left-0 h-full w-64 bg-white shadow-2xl transition-transform duration-300 ease-in-out"
        :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        @click.stop
      >
        <!-- Close button -->
        <div class="flex justify-between pr-2 pb-4">
          <RouterLink :to="{ name: 'home' }">
            <img
              src="../assets/logo.svg"
              alt="Logo"
              class="object-contain h-24"
              @click="menuClose"
            />
          </RouterLink>
          <button @click="menuClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-500 hover:text-gray-700 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <!-- List munu -->
        <ul class="flex flex-col space-y-4">
          <li
            v-for="menu in mobileMenus"
            :key="menu.name"
            @click="menuClose"
            :class="`${menu.link === route.name ? 'bg-gray-100 py-2 font-semibold' : ''} px-4 text-gray-700 hover:text-primary-orange transition-colors`"
          >
            <RouterLink :to="{ name: menu.link }">{{ menu.name }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
