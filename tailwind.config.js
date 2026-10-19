/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f9c5d5',
        rose: '#f86fa0',
        magenta: '#d81b60',
        plum: '#6e1d47',
        nude: '#fdf0f4',
        ink: '#2d1d20'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(216, 27, 96, 0.12)'
      }
    }
  },
  plugins: []
};
