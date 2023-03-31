import { createRouter, createWebHistory } from 'vue-router'
import vProduct from '../components/products/v-products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: vProduct
    },

  ]
})

export default router
