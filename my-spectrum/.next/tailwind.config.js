/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ⬅️ ini penting!
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
