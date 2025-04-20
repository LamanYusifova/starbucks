/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{htm,js}"],
  theme: {
    extend: {
      fontFamily: {
        sodo: ['Sodosans', 'sans-serif'],
        dancing: ['DancingScripts', 'sans-serif'],
      },
    },
    screens: {

      'xxxs': '290px',
      'xxs1': '310px',
      'xxs': '323px',
      'xs': '370px',
      'smxs': '427px',
      'smm': '495px',
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',
      'mlg': '1086px',

      'xl': '1280px',
      'xlg': '1285px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}

