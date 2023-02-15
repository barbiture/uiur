// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      blue: '#A3D8FF',
      error: '#ffa9a9',
      brand: {
        blue: '#027DD7',
        yellow: '#F3CE5E',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1700px',
    },
    extend: {
      'line-height': '3.5rem',
    },
    fontFamily: {
      body: ['e-Ukraine', ...defaultTheme.fontFamily.sans],
      display: ['e-Ukraine Head', ...defaultTheme.fontFamily.sans],
    },
    // extend: {
    //
    // },
  },
  plugins: [
    require('@tailwindcss/typography'),

    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    fontFamily: true,
  },
};
