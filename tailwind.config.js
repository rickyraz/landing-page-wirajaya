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
      'light-cream': '#efeee5',
      'green-light': '#004323',
      'green-dark': '#00291F',
      'red-btn': '#DB2100',
      'red-btn-hover': '#D11F00',
    },
    fontFamily: {
      'haoura': ["'Haoura'", 'sans-serif'],
      'golden': ["'Golden'", 'sans-serif'],
    },
    extend: {
      screens: {
        'max-sm': { max: "414px" }  ,
        'max-md': { max: "767px" }  ,
        'max-lg': { max: "1024px" }  ,
        // => @media (max-width: 767px) { ... }
      },
    },
  },
  plugins: [],
}
