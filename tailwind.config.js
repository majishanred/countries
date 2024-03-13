/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors';
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      'white': 'hsl(0,0%,100%)'
    },
    extend: {
      colors: {
        'blue': {
          'dark': 'hsl(209,23%,22%)',
          'very-dark-bg': 'hsl(207,26%,17%)',
          'very-dark-text': 'hsl(200,15%,8%)'
        },
        'gray': {
          'dark': 'hsl(0,0%,52%)',
          'light': 'hsl(0,0%,98%)'
        }
      }
    },
  },
  plugins: [],
}

