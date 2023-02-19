import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const HOME_ROUTE = '/';
export const CHART_ROUTE = '/chart';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_ROUTE,
      name: "home",
      component: HomeView,
    },
    {
      path: CHART_ROUTE,
      name: "chart",
      component: () => import("../views/ChartView.vue"),
    },
  ],
});

export default router;
