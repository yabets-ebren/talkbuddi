/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, tsx, jsx}", 
    "./components/**/*.{js, ts, tsx, jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: " 'Poppins', sans-serif ",
        nunito: " 'Nunito', sans-serif ",
        montserrat: " 'Montserrat', sans-serif "
      },
      colors: {
        primary: "#5c35fa"
      }
    },
  },
  plugins: [],
}
