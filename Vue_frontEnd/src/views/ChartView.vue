<script setup lang="ts">
import { useStockStore } from "@/stores/stock";
import { ref, computed } from "vue";
import { GChart } from "vue-google-charts";
import StockDetails from '../components/StockDetails.vue';
import { getAmountPieChartData, getVolumesPieChartData } from "@/utils/stockTransformer";
const stock = useStockStore();
const volumeChartData = computed(() => getVolumesPieChartData(stock.stockData))
const amountChartData = computed(() => getAmountPieChartData(stock.stockData))
const chartOptions = ref({
    chart: {
        title: "Option Performence",
        subtitle: `Total Gain ${stock.stockData.maxGain}`,
    },
    width: window.innerWidth,
    height: 500,
});
</script>
<template>
    <StockDetails></StockDetails>
    <v-sheet>
        <h1 class="v-mt-4">Volumes purchased</h1>
        <GChart type="PieChart" :data="volumeChartData" :options="chartOptions" />
    </v-sheet>
    <v-sheet>
        <h1 class="v-mt-4">Amount gain</h1>
        <GChart type="PieChart" :data="amountChartData" :options="chartOptions" />
    </v-sheet>
</template>

<style scoped></style>
