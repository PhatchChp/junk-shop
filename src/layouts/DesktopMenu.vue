<script setup lang="ts" generic="T extends string">
import type { MenuItem } from '@/types/menu'

defineProps<{
  menuItems: MenuItem<T>[]
  selectedMenu: T
}>()

const emit = defineEmits<{
  (event: 'clickMenu', value: T): void
}>()

const handleClickMenu = (value: T) => {
  emit('clickMenu', value)
}
</script>

<template>
  <aside
    class="flex flex-col basis-56 shrink-0 border-r border-gray-700 p-4 sticky top-28 overflow-y-auto max-h-[calc(100vh-7rem)]"
  >
    <div
      v-for="menu in menuItems"
      :key="menu.value"
      @click="handleClickMenu(menu.value)"
      :class="[
        'hover:bg-primary-gray cursor-pointer rounded-md p-2 my-2',
        menu.value === selectedMenu ? 'bg-primary-gray font-semibold' : '',
      ]"
    >
      {{ menu.label }}
    </div>
  </aside>
</template>
