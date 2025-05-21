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
  <div class="overflow-x-auto w-full sticky top-0 z-10 mb-2">
    <ul class="flex gap-4">
      <li
        v-for="menu in menuItems"
        :key="menu.value"
        @click="handleClickMenu(menu.value)"
        :class="[
          'text-body-14 shrink-0 whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full cursor-pointer',
          menu.value === selectedMenu ? 'bg-primary-orange text-white font-semibold' : '',
        ]"
      >
        {{ menu.label }}
      </li>
    </ul>
  </div>
</template>
