/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF4CFA',
        'neon-green': '#39FF14',
        'neon-blue': '#00FFFF',
        'neon-cyan': '#0FF0FC',
        'neon-yellow': '#FFFF33',
        'cyber-dark': '#0f0f1a',
        'cyber-mid': '#1a0033',
        'cyber-overlay': '#1f1f2f',
      },
      boxShadow: {
        'cyber': '0 0 15px #00ffff, 0 0 25px #ff007c',
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar-hide')],
};