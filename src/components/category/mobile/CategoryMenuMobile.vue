<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import type { CategoryMenuItem, CategoryType } from '@/types/category'

const category = useCategoryStore()

defineProps<{
  menuItems: CategoryMenuItem[]
  selectedType: CategoryType
}>()

const emit = defineEmits<{
  (event: 'clickMenu', type: CategoryType): void
}>()

const handleClickMenu = (type: CategoryType) => {
  emit('clickMenu', type)
}
</script>

<template>
  <div class="overflow-x-auto w-full sticky top-0 z-10 mb-2">
    <ul class="flex gap-4">
      <li
        v-for="menu in menuItems"
        :key="menu.type"
        @click="handleClickMenu(menu.type as CategoryType)"
        :class="[
          'text-body-14 shrink-0 whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full cursor-pointer',
          menu.type === category.displayType ? 'bg-primary-orange text-white font-semibold' : '',
        ]"
      >
        {{ menu.name.th }}
      </li>
    </ul>
  </div>
</template>
