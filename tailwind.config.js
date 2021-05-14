module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
      colors: {
        'elephant': {
          '50': '#f4f5f6',
          '100': '#e9ebec',
          '200': '#c8cdd1',
          '300': '#a7aeb5',
          '400': '#65727d',
          '500': '#233545',
          '600': '#20303e',
          '700': '#1a2834',
          '800': '#152029',
          '900': '#111a22'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
