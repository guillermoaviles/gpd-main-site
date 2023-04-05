/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#f4f4f2',
        'gpd-blue': '#131d28',
        'gpd-orange': '#ec6652',
        'gpd-red': '#bd242b',
        'gpd-turquoise': '#79c8cc',
        'gpd-dark-turquoise': '#328995',
      },
    },
  },
  plugins: [],
}