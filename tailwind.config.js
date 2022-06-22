/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        nunito: "'Nunito', sans-serif",
        montserat: "'Montserrat', sans-serif"
      },
      colors:{
        'purple': '#5C35FA',
        'yellow': '#FADC35',
        'gray': '#989898',
        'light-blue':'#7BC8FF',
        'pink': '#F4ABBA',
        'green':'#9FFF02'
      },
      boxShadow: {
        'big': '0px 3px 71.4px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}
