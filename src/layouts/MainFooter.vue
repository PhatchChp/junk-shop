<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { useCategoryStore } from '@/stores/category'
import mobile from '@/components/icons/mobile.png'
import line from '@/components/icons/line.png'
import facebook from '@/components/icons/facebook.png'
import house from '@/components/icons/house.png'

const menuStore = useMenuStore()
const categoryStore = useCategoryStore()
</script>

<template>
  <footer class="bg-primary-gray border-t border-neutral-200 py-12 mt-16">
    <div
      class="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-neutral-700"
    >
      <!-- Logo and Address -->
      <div class="space-y-4">
        <img src="/images/logo.svg" alt="Logo" class="h-[74px] object-contain" />
        <p class="text-sm leading-relaxed">
          กุ้งรับซื้อของเก่าลำปาง<br />
          723/1 ม.2 ต.ชมพู อ.เมือง จ.ลำปาง
        </p>
      </div>

      <!-- เมนู -->
      <div class="space-y-4">
        <h3 class="text-base font-semibold">เมนู</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="menu in menuStore.menus" :key="menu.link">
            <a href="#" class="hover:text-primary transition-colors duration-200">{{
              menu.name
            }}</a>
          </li>
        </ul>
      </div>

      <!-- ของเก่าที่เรารับซื้อ -->
      <div class="space-y-4">
        <h3 class="text-base font-semibold">ของเก่าที่เรารับซื้อ</h3>
        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <p v-for="item in categoryStore.menuItems" :key="item.value">
            {{ item.label }}
          </p>
        </div>
      </div>

      <!-- Contact -->
      <div class="space-y-4">
        <h3 class="text-base font-semibold">ติดต่อเรา</h3>

        <div class="flex items-start gap-3 text-sm">
          <img :src="mobile" alt="mobile" class="w-6 h-6 mt-0.5" />
          <div>
            <p class="font-medium">โทร:</p>
            <p>081-473-9917</p>
          </div>
        </div>

        <div class="flex items-start gap-3 text-sm">
          <img :src="line" alt="line" class="w-6 h-6 mt-0.5" />
          <div>
            <p class="font-medium">Line:</p>
            <p>081-473-9917</p>
          </div>
        </div>

        <div class="flex items-start gap-3 text-sm">
          <img :src="facebook" alt="facebook" class="w-6 h-6 mt-0.5" />
          <div>
            <p class="font-medium">Facebook:</p>
            <p>กุ้งรับซื้อของเก่าลำปาง</p>
          </div>
        </div>

        <div class="flex items-start gap-3 text-sm">
          <img :src="house" alt="address" class="w-6 h-6 mt-0.5" />
          <div>
            <p class="font-medium">ที่อยู่:</p>
            <p>723/1 ม.2 ต.ชมพู อ.เมือง จ.ลำปาง</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-neutral-300 pt-6 text-center text-sm text-neutral-500">
      © {{ new Date().getFullYear() }} กุ้งรับซื้อของเก่าลำปาง — All rights reserved.
    </div>
  </footer>
</template>
