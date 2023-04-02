import { createRouter, createWebHistory } from 'vue-router'
import OnboardingView from '@/views/OnboardingView.vue'
import DreamJournalView from '@/views/DreamJournalView.vue'
import DreamDetailView from '@/views/DreamDetailView.vue'
import RecordTextView from '@/views/RecordTextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/journal'
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: OnboardingView
    },
    {
      path: '/journal',
      name: 'journal',
      component: DreamJournalView
    },
    {
      path: '/record-text',
      name: 'record-text',
      component: RecordTextView
    },
    {
      path: '/dream-detail/:id',
      name: 'dream-detail',
      component: DreamDetailView
    }
  ]
})

export default router
