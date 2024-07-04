/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        screens: {
            sm: '375px',
            md: '600px',
            lg: '960px',
            xl: '1295px',
            '2xl': '1440px',
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
            space: ['Space Grotesk', 'sans-serif'],
            mont: ['Montserrat', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                md: '2rem',
                lg: '4rem',
                xl: '8rem',
            },
        },
        extend: {
            colors: {
                neutral: {
                    875: '#1A1A1A',
                    865: '#1B1B1B',
                    855: '#1C1C1C',
                    845: '#1F1F1F',
                    835: '#212121',
                    825: '#242424',
                },
            },
            boxShadow: {
                '3xl': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(circle at center,rgb(10 10 10 / 0) 0%,rgb(10, 10, 10, 0.5) 100%)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
