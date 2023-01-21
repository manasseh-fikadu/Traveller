/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#FF6347',
        tertiary: '#FFD700',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      width: {
        '128': '32rem',
        '144': '36rem',
      },

      height: {
        '128': '32rem',
        '144': '36rem',
      },

      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
