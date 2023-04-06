import { defineStore } from 'pinia'
import supabase from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'

interface State {
  user: User | null
  profile: any
}
export const useUserStore = defineStore('user', {
  state: (): State => ({
    user: null,
    profile: null
  }),

  actions: {
    async fetchUser(): Promise<any | undefined> {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      if (user) {
        this.user = user
        return user
      } else {
        return undefined
      }
    },
    async signOut(): Promise<void> {
      await supabase.auth.signOut()
      this.user = null
    },
    async signIn(email: string, password: string): Promise<any | undefined> {
      const {
        data: { user },
        error
      } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) {
        console.error('Error signing in:', error)
        return undefined
      } else {
        console.log('Signed in:', user)
        this.user = user
        await this.fetchUserProfile(user!.id)
        return user
      }
    },
    async signUp(email: string, password: string): Promise<any | undefined> {
      const {
        data: { user },
        error
      } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) {
        console.error('Error signing up:', error)
        return undefined
      } else {
        console.log('Signed up:', user)
        this.user = user
        return user
      }
    },
    async fetchUserProfile(userId: string) {
      console.log('fetching user profile', userId)
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', userId)
        .single()

      console.log('data', data)
      if (error) {
        console.log('Error fetching user profile:', error.message)
      } else {
        this.profile = data
      }
    }
  },
  persist: true
})
