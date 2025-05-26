<script setup lang="ts">
import { useRouter } from 'vue-router'
import { usePriceRateStore } from '@/stores/priceRate'
import type { CategoryType } from '@/types/category'
import MobileMenu from '@/layouts/MobileMenu.vue'
import PriceRateResult from '@/components/priceRate/PriceRateResult.vue'

const router = useRouter()
const priceRateStore = usePriceRateStore()

const handleClickMenu = (type: string) => {
  priceRateStore.navigateToCategory(type as CategoryType, router)
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-heading-30">เรทราคาวันนี้</h1>
    <MobileMenu
      :menuItems="priceRateStore.menuItems"
      :selectedMenu="priceRateStore.displayType"
      @clickMenu="handleClickMenu"
    />
    <PriceRateResult />
  </div>
</template>
