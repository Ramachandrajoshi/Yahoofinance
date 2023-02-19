<script setup lang="ts">
import { useStockStore } from "@/stores/stock";
import { ref, computed } from "vue";
import { GChart } from "vue-google-charts";
import StockDetails from '../components/StockDetails.vue';
import { mapOptionTradeDataToTable } from "@/utils/stockTransformer";
const stock = useStockStore();
const tableData = computed(() => mapOptionTradeDataToTable(stock.stockData))
const chartOptions = ref({
    chart: {
        title: "Option Performence",
        subtitle: `Total Gain ${stock.stockData.maxGain}`,
    },
    allowHtml: true,
});
</script>
<template>
    <StockDetails></StockDetails>
    <GChart type="Table" :data="tableData" :options="chartOptions" />
</template>

<style scoped></style>
