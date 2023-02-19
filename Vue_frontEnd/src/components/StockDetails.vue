<script setup lang="ts">
import { useStockStore } from "@/stores/stock";
const stock = useStockStore();
</script>
<template>
    <div class="mb-12">
        <h1 class="V-mt-4">Stock Details</h1>
        <v-row>
            <v-col cols="6" lg="3" class="text-right">
                Company:
            </v-col>
            <v-col cols="6" lg="3" class="text-h6">
                {{ stock.stockData.quote?.longName }}
            </v-col>
            <v-col cols="6" lg="3" class="text-right">
                Type:
            </v-col>
            <v-col cols="6" lg="3" class="text-h6">
                {{ stock.stockData.quote?.typeDisp }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" lg="3" class="text-right">
                Symbol:
            </v-col>
            <v-col cols="6" lg="3" class="text-h6">
                {{ stock.stockData.quote?.symbol }}
            </v-col>
            <v-col cols="6" lg="3" class="text-right">
                Day Range (low-high):
            </v-col>
            <v-col class="text-h6">
                {{ stock.stockData.quote?.regularMarketDayRange }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" lg="3" class="text-right">
                Current Status:
            </v-col>
            <v-col cols="6" lg="3" class="text-h6">
                {{ stock.stockData.quote?.marketState }}
            </v-col>
            <v-col cols="6" lg="3" class="text-right">
                Exchange Timezone:
            </v-col>
            <v-col cols="6" lg="3" class="text-h6">
                {{ stock.stockData.quote?.exchangeTimezoneName }}
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" lg="3" class="text-right">
                Currency:
            </v-col>
            <v-col class="text-h6">
                {{ stock.stockData.quote?.financialCurrency }}
            </v-col>
            <v-col cols="6" lg="3" class="text-right">
                52 Week Range (low-high):
            </v-col>
            <v-col class="text-h6">
                {{ stock.stockData.quote?.fiftyTwoWeekRange }}
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
template {
    margin-bottom: 10px;
}
</style>
