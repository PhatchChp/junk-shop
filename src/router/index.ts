import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import PriceRateView from '@/views/PriceRateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category/:type?',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/price-rate/:type?',
      name: 'price-rate',
      component: PriceRateView,
    },
    {
      path: '/service',
      name: 'service',
      component: HomeView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView,
    },
    {
      path: '/more',
      name: 'more',
      component: HomeView,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
