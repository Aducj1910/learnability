/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#202225"
      },
      fontFamily: {
        body: ['Inter']
      }
    },
  },
  plugins: [],
}