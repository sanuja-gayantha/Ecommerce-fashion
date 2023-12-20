/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monoton': ['"Monoton"', ...defaultTheme.fontFamily.sans],
        'poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#1e1e27',
        'secondery':'#b5aec4',
        'ured':'#dc3545'
      },
    },
  },
  plugins: [],
}