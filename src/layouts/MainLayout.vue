<script setup lang="ts">
import MainNavbar from './MainNavbar.vue'
</script>

<template>
  <main>
    <!-- Navbar -->
    <MainNavbar />

    <!-- Main Content -->
    <div class="container max-w-7xl px-2 mt-28 lg:mt-40 mx-auto">
      <slot></slot>
    </div>

    <!-- Footer -->
    <footer></footer>
  </main>
</template>
