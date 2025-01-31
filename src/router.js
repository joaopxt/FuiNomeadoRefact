import { createRouter, createWebHistory } from "vue-router";

import PlanosRefact from "./components/pages/PlanosRefact.vue";
import HomeRefact from "./components/pages/HomeRefact.vue";
import ContatoRefact from "./components/pages/ContatoRefact.vue";
import PricingPage from "./components/pages/reformulado/PricingPage.vue";
import HomePage from "./components/pages/reformulado/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeRefact },
    { path: "/home", component: HomePage },
    { path: "/planosRefact", component: PlanosRefact },
    { path: "/planosReformulado", component: PricingPage },
    { path: "/contatoRefact", component: ContatoRefact },
  ],
});

export default router;
