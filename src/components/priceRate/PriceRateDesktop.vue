<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePriceRateStore } from '@/stores/priceRate'
import type { CategoryType } from '@/types/category'
import DesktopMenu from '@/layouts/DesktopMenu.vue'
import PriceRateResult from '@/components/priceRate/PriceRateResult.vue'

const router = useRouter()
const priceRateStore = usePriceRateStore()

const handleClickMenu = (type: string) => {
  priceRateStore.navigateToCategory(type as CategoryType, router)
}
</script>

<template>
  <div class="flex">
    <DesktopMenu
      :menuItems="priceRateStore.menuItems"
      :selectedMenu="priceRateStore.displayType"
      @clickMenu="handleClickMenu"
    />
    <section class="flex flex-col flex-1 items-center p-8 gap-4 overflow-y-auto h-full">
      <h1 class="text-heading-36">เรทราคาวันนี้</h1>
      <PriceRateResult />
    </section>
  </div>
</template>
