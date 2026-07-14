/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgba(0, 0, 0, 0.08)',
        card: '#ffffff',
        'card-foreground': '#000000',
        'muted-foreground': '#737373',
        ring: '#000000',
        background: '#ffffff',
      },
    },
  },
  plugins: [],
}
