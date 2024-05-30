/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-main':
          'linear-gradient(90deg, rgba(54,183,255,1) 0%, rgba(0,87,255,1) 100%)',
        'gradient-main-45':'linear-gradient(45deg, rgba(54,183,255,1) 0%, rgba(0,87,255,1) 100%)',
      },
    },
  },
  plugins: [],
}
