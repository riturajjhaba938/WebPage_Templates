/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f3f4f6', // Light gray
          DEFAULT: '#10b981', // Emerald 500 (Green theme as per path name hint & Trust palette)
          dark: '#065f46', // Emerald 800
          accent: '#059669', // Emerald 600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
