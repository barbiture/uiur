/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            white: "#fff",
            black: "#000",
            brand: {
                blue: '#027DD7',
                yellow: '#F3CE5E'
            }
        },
        extend: {
            fontFamily: {
                eUkraine: ['e-Ukraine'],
                sans: ['eUkraine', 'sans-serif'],
                eUkraineHead: ['e-Ukraine Head'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
    corePlugins: {
        fontFamily: true,
    },
}
