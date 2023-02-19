<script setup lang="ts">
import { useStockStore } from "../stores/stock";
const store = useStockStore();
</script>
<template>
    <code>{{ store.stockData }}</code>
</template>

<style scoped></style>
