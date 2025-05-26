<script setup lang="ts">
import PriceRateDesktop from '@/components/priceRate/PriceRateDesktop.vue'
import PriceRateMobile from '@/components/priceRate/PriceRateMobile.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePriceRateStore } from '@/stores/priceRate'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const priceRateStore = usePriceRateStore()

watch(
  () => route.params.type,
  (newType) => priceRateStore.syncDisplayTypeFromRoute(newType),
  { immediate: true },
)
</script>

<template>
  <MainLayout>
    <PriceRateDesktop class="hidden lg:flex" />
    <PriceRateMobile class="flex lg:hidden" />
  </MainLayout>
</template>
