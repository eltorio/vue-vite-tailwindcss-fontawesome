/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: (process.env.NODE_ENV !== 'development') ? [] : [{ pattern: /.*/ }],
  theme: {
    extend: {},
  },
  plugins: [],
}
