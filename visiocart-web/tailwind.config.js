/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A4171',
          gray: '#545859',
          green: '#16A34A',
          red: '#DC2626',
        }
      }
    },
  },
  plugins: [],
}