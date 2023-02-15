/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#1C1C1C",
        bg2: "#23252C",
        bg3: "#1A1B21",
      }
    },
  },
  plugins: [],
}
