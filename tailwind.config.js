
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
    main_color:{
  1000:"#f4f1de",
  800:"#e07a5f",
  600:"#3d405b",
  400:"#81b29a",
  200:"#f2cc8f"
    },
      },
    },
  },
  plugins: [ require('tailwind-scrollbar','tailwind-scrollbar-hide'),],
}
