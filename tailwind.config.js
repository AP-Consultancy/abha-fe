/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f3ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      borderRadius: {
        button: '0.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        fadeCarousel: 'fadeCarousel 25s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeCarousel: {
          '0%': { opacity: 0 },
          '4%': { opacity: 1 },
          '20%': { opacity: 1 },
          '24%': { opacity: 0 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
