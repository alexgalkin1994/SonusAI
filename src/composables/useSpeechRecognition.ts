import { ref } from 'vue'
import { SpeechRecognition } from '@capacitor-community/speech-recognition'

export default function useSpeechRecognition() {
  const console = {
    log: function (msg) {
      alert(msg)
    }
  }

  const recognitionActive = ref(false)
  const recognizedText = ref('')

  SpeechRecognition.requestPermission()

  if (!SpeechRecognition) {
    console.log('SpeechRecognition is not supported in your browser')
  }

  const startRecognition = async () => {
    console.log('startRecognition() called')

    SpeechRecognition.start({
      language: 'en-US',
      prompt: 'Speak now',
      popup: false,
      partialResults: true
    })
  }

  SpeechRecognition.addListener('partialResults', (data: any) => {
    console.log(data.matches)
    if (data.matches?.length > 0) {
      recognizedText.value += data.matches[0]
    }

    if (data.value?.length > 0) {
      recognizedText.value += data.value[0]
    }
  })

  const stopRecognition = async () => {
    SpeechRecognition.stop()
  }

  const toggleSpeechRecognition = () => {
    recognitionActive.value = !recognitionActive.value
    console.log('hiwqehqwih    ' + recognitionActive.value)

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
