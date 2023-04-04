export interface Dream {
  id?: number
  user_id: string | undefined
  date: string
  title: string
  description: string
  tags: string[]
  moods: string[]
  audioRecording?: Blob // Optional, if you decide to store audio recordings
  interpretation: string
  createdAt?: string
  updatedAt?: string
}
