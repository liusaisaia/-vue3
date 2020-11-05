import { createRouter, createWebHistory } from 'vue-router';
import DayPage from '@/views/Day';

const routes = [
  {
    path: '/',
    name: 'DayPage',
    component: DayPage
  },
  {
    path: '/month',
    name: 'MonthPage',
    component: () => import('../views/Month.vue')
  },
  {
    path: '/year',
    name: 'YearPage',
    component: () => import('../views/Year.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
