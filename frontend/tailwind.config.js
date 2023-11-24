/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'r1-green': '#4CA865',
      },
      boxShadow: {
        'r1': '0 0 15px 1px #0000001c',
      }
    },
  },
  plugins: [],
}
