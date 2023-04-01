import { createRouter, createWebHistory } from 'vue-router'
import vProduct from '../components/products/v-products.vue'
import vOrdersVue from "../components/orders/v-orders.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: vProduct
    },
    {
      path: '/orders',
      name: 'orders',
      component: vOrdersVue
    }
  ]
})

export default router
