/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        bg: '#e8ecf0',
        surface: '#f0f3f6',
        card: '#f6f8fa',
        border: '#cdd5de',
        muted: '#8898aa',
        body: '#3d4f63',
        heading: '#1e2f42',
        accent: '#3b6ea5',
        'accent-light': '#5b8fc7',
        'accent-bg': '#dde9f5',
      },
    },
  },
  plugins: [],
}
