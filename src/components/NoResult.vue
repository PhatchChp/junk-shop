<script setup lang="ts">
import noResultImg from '@/components/icons/no-results.png'

const props = defineProps<{ text: string }>()
</script>

<template>
  <div class="text-center text-gray-500 mt-8">
    <img :src="noResultImg" alt="No results" class="w-32 h-32 mx-auto mb-4" />
    <p class="text-body-bold-20">ไม่พบรายการที่ตรงกับ "{{ props.text }}"</p>
    <p class="text-body-16 mt-2">ลองค้นหาด้วยคำอื่น หรือเลือกประเภทจากเมนูด้านซ้าย</p>
  </div>
</template>
