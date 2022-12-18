/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'artbea-pink': '#F486CA'
      },
      fontSize: {
        confluenza: ['112.5%', '1.56'],
        'confluenza-h1': ['2.5rem', '1.1'],
        'confluenza-h2': ['1.73286rem', '1.1'],
        'confluenza-p': ['18px', '1.56'],
        'confluenza-code': ['0.85rem', '1.5'],
        'confluenza-pre': ['0.85rem', '1.5']
      },
      margin: {
        confluenza: '1.56rem',
        'confluenza-1.5': '1.5rem'
      }
    }
  },
  plugins: []
}
