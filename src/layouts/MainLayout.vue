<script setup lang="ts">
import MainNavbar from './MainNavbar.vue'
</script>

<template>
  <main>
    <!-- Navbar -->
    <MainNavbar />

    <!-- Main Content -->
    <slot></slot>

    <!-- Footer -->
    <footer></footer>
  </main>
</template>
