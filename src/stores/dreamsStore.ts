import type { Dream } from './../types/apiTypes.d'
import { defineStore } from 'pinia'
import supabase from '@/lib/supabaseClient'
import { useUserStore } from './user'

interface State {
  dreams: Dream[]
}
export const useDreamsStore = defineStore('dreams', {
  state: (): State => ({ dreams: [] }),

  actions: {
    async fetchDreams(): Promise<Dream[] | undefined> {
      const userStore = useUserStore()

      const { data, error } = await supabase
        .from('dreams')
        .select('*')
        .eq('user_id', userStore.user?.id)

      if (error) {
        console.error('Error fetching dreams:', error)
        return undefined
      } else {
        console.log('Fetched dreams:', data)
        this.dreams = data.reverse()
        return data
      }
    },
    async fetchDreamById(id: number) {
      const { data, error } = await supabase.from('dreams').select('*').eq('id', id).single()
      if (error) {
        console.error(`Error fetching dream with id ${id}:`, error)
      } else {
        console.log(`Fetched dream with id ${id}:`, data)
        return data
      }
    },
    async getDreamById(id: number) {
      const dream = this.dreams.find((dream) => dream.id === id)
      if (dream) return dream

      return this.fetchDreamById(id)
    }
  }
})
