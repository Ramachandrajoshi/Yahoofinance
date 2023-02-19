<script setup lang="ts">
import { ref } from "vue";
import { GChart } from "vue-google-charts";
import { useCounterStore } from "../stores/counter";

const chartData = ref([
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
]);
const chartOptions = ref({
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
});
const store = useCounterStore();
</script>
<template>
    <p>counter is {{ store.count }}</p>
    <p>{{ store.doubleCount }}</p>
    <button @click="store.increment">increment</button>
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
</template>

<style scoped></style>
