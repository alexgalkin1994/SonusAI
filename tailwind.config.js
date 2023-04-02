/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      midnight: '#0A0C17',
      primary: '#7B62FF',
      'accent-1': '#F75978',
      'accent-2': '#F1815E',
      'accent-3': '#F2C94C',
      white: '#FDFDFF',
      gray: '#9A9CA0'
    },
    extend: {
      backgroundImage: {
        'onboarding-img': "url('@/assets/onboarding-bg.png')"
      }
    }
  },
  plugins: []
}
