export interface Dream {
  id: number
  userId: number
  date: Date
  title: string
  description: string
  tags: string[]
  audioRecording?: Blob // Optional, if you decide to store audio recordings
  interpretation: string
  createdAt: Date
  updatedAt: Date
}
