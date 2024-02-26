/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter',
      },
      colors:{
        bluePrimary:"#1677FF",
        bgWhite:"#F8F9FD"
      }
    },
  },
  plugins: [],
}

