/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'drywall': "url('src/drywall.jpg')"
      },
      fontFamily: {
        'sans' : ['Helvetica', ...defaultTheme.fontFamily.sans],
        // 'serif' : ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

