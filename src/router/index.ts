import { createRouter, createWebHistory } from 'vue-router'
import supabase from '@/lib/supabaseClient'
import OnboardingView from '@/views/OnboardingView.vue'
import DreamJournalView from '@/views/DreamJournalView.vue'
import DreamDetailView from '@/views/DreamDetailView.vue'
import RecordTextView from '@/views/RecordTextView.vue'
import AuthView from '@/views/AuthView.vue'
import { useUserStore } from '@/stores/user'

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
      component: DreamJournalView,
      meta: { requiresAuth: true }
    },
    {
      path: '/record-text',
      name: 'record-text',
      component: RecordTextView,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/dream-detail/:id',
      name: 'dream-detail',
      component: DreamDetailView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !userStore.user) {
    next('/auth')
  } else if (to.path === '/auth' && userStore.user) {
    next('/')
  } else {
    next()
  }
})

export default router
