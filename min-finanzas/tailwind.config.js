/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'nunito-sans': ['Nunito-sans', 'sans-serif'],
        'nunito-bold': ['Nunito-bold', 'sans-serif'],
        'red-sans': ['Red-sans', 'sans-serif'],
        'red-bold': ['Red-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}