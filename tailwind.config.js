/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        background: '#09090b',
        foreground: '#f4f4f5',
        primary: {
          DEFAULT: '#7c3aed',
          foreground: '#ffffff',
        },
      }
    },
  },
  plugins: [],
}
