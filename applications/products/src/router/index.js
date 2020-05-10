import Vue from "vue";
import VueRouter from "vue-router";
import Listings from "../views/Listings.vue";
import Purchases from "../views/Purchases.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Listings",
    component: Listings,
  },
  {
    path: "/purchases",
    name: "Purchases",
    component: Purchases,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
