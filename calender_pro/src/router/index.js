import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '@/views/Day';

const routes = [
  {
    path: '/',
    name: 'day',
    component: DayPage
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../views/Month.vue')
  },
  {
    path: '/year',
    name: 'year',
    component: () => import('../views/Year.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
