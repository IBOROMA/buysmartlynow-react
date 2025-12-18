/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0055aa', // Professional Blue
                secondary: '#28a745', // Trust Green
                accent: '#f4f7f6', // Light Gray-White
                dark: '#333333'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'slow-zoom': 'zoom 20s infinite alternate',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                zoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
