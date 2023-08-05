const daisyui = require('daisyui')
const {typography, theme, fontSize } =  require('./tailwind');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: fontSize
    }
  },
  daisyui: {
    themes: [
      // data-theme="default"
      { 
        default: theme
      },
      "dark",
      "light",
      "cupcake"
    ],
    logs: true
  },
  plugins: [ typography, daisyui ],
};
