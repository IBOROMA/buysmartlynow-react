/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0055aa',
                secondary: '#28a745',
                accent: '#f4f7f6',
                dark: '#333333'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'slow-zoom': 'zoom 20s infinite alternate',
                'fade-in': 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
                zoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
