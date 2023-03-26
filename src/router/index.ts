import RecordDreamView from '@/views/RecordDreamView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/record',
      name: 'record',
      component: RecordDreamView
    }
  ]
})

export default router
