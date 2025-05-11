<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import CategoryMobile from '@/components/category/CategoryMobile.vue'
import CategoryDesktop from '@/components/category/CategoryDesktop.vue'

const route = useRoute()
const category = useCategoryStore()

watch(
  () => route.params.type,
  (newType) => category.syncDisplayTypeFromRoute(newType),
  { immediate: true },
)
</script>

<template>
  <MainLayout>
    <CategoryDesktop class="hidden lg:flex" />
    <CategoryMobile class="flex lg:hidden" />
  </MainLayout>
</template>
