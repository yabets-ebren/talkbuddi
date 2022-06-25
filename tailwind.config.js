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
        'green':'#9FFF02',
        'white': '#ffffff',
        'orange':'#FF7F50',
        'light-orange':'#FFAA47',
        'bold-green':'#29C67A',
        'skyblue':'#8CE3E9',
        'red': '#FF0000',
        'water': '#B2F3D4'
      },
      boxShadow: {
        'big': '0px 3px 71.4px rgba(0, 0, 0, 0.2)',
      },
      width:{
        '90':'90%',
        'maximum':'600px',
      },
      height:{
        '75':'75vh',
      },
      maxHeight:{
        'max-hero-height':'650px'
      },
      margin:{
        iphone: '6px 8px 8px 8px'
      },
      borderWidth:{
        big: '30px'
      }
    },
  },
  plugins: [],
}
