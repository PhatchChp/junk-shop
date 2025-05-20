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
  <aside
    class="flex flex-col basis-56 shrink-0 border-r border-gray-700 p-4 sticky top-28 overflow-y-auto max-h-[calc(100vh-7rem)]"
  >
    <div
      v-for="menu in menuItems"
      :key="menu.type"
      @click="handleClickMenu(menu.type as CategoryType)"
      :class="[
        'hover:bg-primary-gray cursor-pointer rounded-md p-2 my-2',
        menu.type === category.displayType ? 'bg-primary-gray font-semibold' : '',
      ]"
    >
      {{ menu.name.th }}
    </div>
  </aside>
</template>
