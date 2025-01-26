/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: 'rgb(3 72 165 / <alpha-value>)', // #0348A5
        lightBlue: 'rgb(29 173 248 / <alpha-value>)', // #1DADF8
        darkGray: 'rgb(81 81 81 / <alpha-value>)', // #515151
        lightGray: 'rgb(217 217 217 / <alpha-value>)', // #D9D9D9
        backgroundLight: 'rgb(234 235 230 / <alpha-value>)', // #EAEBE6
      },
      fontFamily: {
        'sans': ['Nunito', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
        '50': '0.50',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}