/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: {
        darkest: 'hsl(var(--primary-darkest))',
        dark: 'hsl(var(--primary-dark))',
        DEFAULT: 'hsl(var(--primary))',
        light: 'hsl(var(--color-primary-light))'
      }
    }
  },
  plugins: []
}
