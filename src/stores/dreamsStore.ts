import type { Dream } from './../types/apiTypes.d'
import { defineStore } from 'pinia'
import supabase from '@/lib/supabaseClient'

interface State {
  dreams: Dream[]
}
export const useDreamsStore = defineStore('dreams', {
  state: (): State => ({ dreams: [] }),

  actions: {
    async fetchDreams() {
      const { data, error } = await supabase.from('dreams').select('*')

      if (error) {
        console.error('Error fetching dreams:', error)
      } else {
        console.log('Fetched dreams:', data)
        return data
      }
    },
    async fetchDreamById(id: string) {
      const { data, error } = await supabase.from('dreams').select('*').eq('id', id).single()

      if (error) {
        console.error(`Error fetching dream with id ${id}:`, error)
      } else {
        console.log(`Fetched dream with id ${id}:`, data)
        return data
      }
    }
  }
})
