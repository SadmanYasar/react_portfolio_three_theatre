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
  },
  plugins: [],
}