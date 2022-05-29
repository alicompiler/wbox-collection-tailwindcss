// eslint-disable-next-line no-undef,@typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.indigo,
      secondary: colors.green,
      error: colors.red,
      warning: colors.amber,
      transparent: '#0000',
    },
    extend: {},
  },
  plugins: [],
}
