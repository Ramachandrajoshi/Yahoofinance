import { ref } from "vue";
import { defineStore } from "pinia";

export const useStockStore = defineStore("stock", () => {
  const stockOptions = ["AAPL", "GOOG", "GOOGL", "MSFT"];
  const stock = ref(stockOptions[0]);
  const stockData = ref();
  let timeout: NodeJS.Timeout | null = null;
  async function fetchStock() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    const result = await fetch(
      `http://localhost:4000/${stock.value}?min=${10}`
    ).then((r) => r.json());
    stockData.value = result;
    timeout = setTimeout(async () => await fetchStock(), 10000);
  }
  fetchStock();
  return { stock, stockData, stockOptions, fetchStock };
});
