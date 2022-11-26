/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {},
        colors: {
            primary: {
                100: 'hsl(26, 100%, 55%)',
                200: 'hsl(25, 100%, 94%)'
            },
            neutral: {
                100: 'hsl(220, 13%, 13%)',
                200: 'hsl(219, 9%, 45%)',
                300: 'hsl(220, 14%, 75%)',
                400: 'hsl(223, 64%, 98%)',
                500: 'hsl(0, 0%, 100%)',
                600: 'hsl(0, 0%, 0%)'

            },
            gradient:{
                primary:'#080f28',
                secundary:'#030408'
            }
        },
        fontFamily:{
            title: ['Kumbh Sans', 'sans-serif']
        },
        screens: {
            sm: "360px",
            // => @media (min-width: 375px) { ... }

            md: "768px",
            // => @media (min-width: 960px) { ... }

            lg: "1100px",
            // => @media (min-width: 1440px) { ... }
        },
    },
    plugins: [],
}