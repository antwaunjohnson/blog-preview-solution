/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)'
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}

