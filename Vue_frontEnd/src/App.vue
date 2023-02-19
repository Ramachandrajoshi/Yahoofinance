<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Json</RouterLink>
    <RouterLink to="/chart">Chart</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped></style>
