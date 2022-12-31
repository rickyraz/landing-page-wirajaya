/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'light-cream': '#FAF2E5',
      'green-light': '#004426',
      'green-dark': '#00291F',
      'red-btn': '#DB2100',
      'red-btn-hover': '#D11F00',
    },
    extend: {
      screens: {
        'max-md': { max: "767px" }  ,
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
}
