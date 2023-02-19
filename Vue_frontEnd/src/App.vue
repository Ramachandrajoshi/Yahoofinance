<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import { useStockStore } from "@/stores/stock";
import router, { CHART_ROUTE, HOME_ROUTE } from "./router";
const stock = useStockStore();
const isChartView = ref(false);
function toggleView() {
  isChartView.value = !isChartView.value;
  if (isChartView.value) {
    router.replace(CHART_ROUTE)
  } else {
    router.replace(HOME_ROUTE)
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary" :title="'Yahoo Trading'" :elevation="2">
        <template v-slot:append>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props">
                {{ stock.stock }} <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in stock.stockOptions" :key="index" :value="index"
                @click="stock.setStockToFetch(item)">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn icon @click="toggleView">
            <v-icon>{{ isChartView ? "mdi-table" : 'mdi-chart-pie' }}</v-icon>
          </v-btn>

        </template>

      </v-app-bar>

      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col sm="12" lg="6">
            <RouterView />
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
