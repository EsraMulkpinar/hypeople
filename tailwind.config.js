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
        softBlue:"#E3F0FF",
        bgWhite:"#F8F9FD",
        blueButton:"#0168FF",
        text:{
          darkGray:"#262626",
          lightGray:"#8C8C8C",
          midGray:"#666666"
          
        }
      }
    },
  },
  plugins: [],
}

