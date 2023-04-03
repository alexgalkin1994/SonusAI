import { ref } from 'vue'
import { SpeechRecognition } from '@capacitor-community/speech-recognition'

export default function useSpeechRecognition() {
  const recognitionActive = ref(false)
  const recognizedText = ref('')

  SpeechRecognition.requestPermission()

  if (!SpeechRecognition) {
    console.log('SpeechRecognition is not supported in your browser')
  }

  const startRecognition = async () => {
    SpeechRecognition.start({
      language: 'en-US',
      prompt: 'Say something',
      partialResults: true,
      popup: false
    })

    SpeechRecognition.addListener('partialResults', (data: any) => {
      console.log('partialResults was fired ' + JSON.stringify(data.matches))
      recognizedText.value = data.matches[0]
    })
  }

  const stopRecognition = async () => {
    SpeechRecognition.stop()
  }

  const toggleSpeechRecognition = () => {
    recognitionActive.value = !recognitionActive.value

    if (recognitionActive.value) {
      startRecognition()
    } else {
      stopRecognition()
    }
  }

  return {
    recognizedText,
    recognitionActive,
    toggleSpeechRecognition
  }
}
