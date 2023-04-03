/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#337D8A',
          light: '#5AB1C0'
        },
        secondary: {
          DEFAULT: '#0C2941',
        },
        tertiary: {
          DEFAULT: '#E5BF6D',
          light: '#EBD19B',
        },
        gray: {
          DEFAULT: '#E1DED5',
        }
      }
    },
  },
  plugins: [],
}
