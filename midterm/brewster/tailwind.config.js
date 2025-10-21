/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6F2",
        brown: "#8B4513",
      },
      fontFamily: {
        'sans': ["open-sans", "sans-serif"],
        'gab': ["gabarito", "sans-serif"],
      },
    },
  },
  plugins: [],
};