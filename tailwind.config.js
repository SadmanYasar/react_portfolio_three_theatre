/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(ellipse at bottom, var(--bgColor) 0%, var(--bgColor2) 100%)',
      }),
    },
    transitionTimingFunction: {
      'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
    },
    animation: {
      text: 'text 5s ease infinite',
    },
    keyframes: {
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
    fontFamily: {
      'fira': ['Fira Code', 'monospace'],
    },
  },
  plugins: [],
}