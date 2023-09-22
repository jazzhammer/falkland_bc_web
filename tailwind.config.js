
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        docks: {
          900: '#d8d6c7',
          800: '#d0cdbb', //table border
          700: '#c8c5af',
          600: '#b7b397',
          500: '#afaa8b',
          400: '#a6a17f', //table header
          300: '#9e9973',
          200: '#958f67',
          100: '#89845f'
        },
        sand: {
          900: '#fdecd1',
          800: '#fcddaf',// caution
          700: '#fbcf8c', // light hover text
          600: '#fac06a',
          500: '#f7a325',
          400: '#f09309',
          300: '#cd7e08',
          200: '#ab6906',
          100: '#885405'
        },
        cayenne: {
          900: '#fee8e2',
          800: '#fccdc0',
          700: '#fab19e',
          600: '#f8967c',
          500: '#f56038', // alert
          400: '#f34516',
          300: '#db370b',
          200: '#b92e09', // danger
          100: '#972608'
        },
        algae: {
          900: '#22a1b6', // btnhover
          800: '#1e8ea0', // execute
          700: '#1a7b8b', // btnreg,
          600: '#166875', // bg panel light
          500: '#125560',
          400: '#0a2f35', // bg panel dark
          300: '#061c20', // btndown, form label text
          200: '#02090a',
          100: '#000000'
        },
        chia: {
          900: '#42d08d', // new form bg
          800: '#30c47e', //new
          700: '#2aab6e',
          600: '#24935e',
          500: '#1e7a4f',
          400: '#12492f',
          300: '#0c301f',
          200: '#06180f',
          100: '#000000'
        }
      }
    }
  },
  plugins: [],
}
