import { ref } from "vue";
import { defineStore, } from "pinia";
import type { StockResponse } from "@/models/stock-response";

export const useStockStore = defineStore("stock", () => {
  const stockOptions = ["AAPL", "GOOG", "GOOGL", "MSFT"];
  const stock = ref(stockOptions[0]);
  const stockData = ref({} as StockResponse);
  const stockLoading = ref(false);
  let timeout: NodeJS.Timeout | null = null;
  async function fetchStock() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    stockLoading.value = true;
    const result = await fetch(
      `http://192.168.101.198:4000/${stock.value}?min=${10}`
    ).then((r) => r.json());
    stockData.value = result;
    stockLoading.value = false;
    timeout = setTimeout(async () => await fetchStock(), 10000);
  }

  function setStockToFetch(newStock: string) {
    stock.value = newStock;
    fetchStock();
  }

  fetchStock();
  return { stock, stockData, stockLoading, stockOptions, setStockToFetch };
});
