/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'augustina': ['Agustina', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'subTitle': '#868e96',
        'textHover': '#8c43ce',
        'white': '#fff',
        'background': '#171c28'
      }
    }
  },
  plugins: [],
}
