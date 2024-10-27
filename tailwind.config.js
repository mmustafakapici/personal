/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        geistMono: ['GeistMono', 'monospace'],
      },
    },
  },
  plugins: [],
};