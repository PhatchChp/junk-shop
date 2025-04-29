<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import SubHeroSection from '@/components/home/SubHeroSection.vue'
import MainLayout from '@/layouts/MainLayout.vue'

import subhero1 from '@/assets/images/front_shop.jpg'
import subhero2 from '@/assets/images/pet_pack.jpg'
import subhero3 from '@/assets/images/spare_part_2.jpg'
import subhero4 from '@/assets/images/all_zinc.jpg'
</script>

<template>
  <MainLayout>
    <main>
      <HeroSection />
      <SubHeroSection :images-url="[subhero1, subhero2, subhero3, subhero4]" />
    </main>
  </MainLayout>
</template>
