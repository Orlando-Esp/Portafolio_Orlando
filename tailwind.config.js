/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',  // Gris oscuro
        secondary: '#2d3748', // Gris más oscuro
        accent: '#4fd1c5', // Verde azulado
        light: '#f7fafc' // Blanco
      },
    },
  },
  plugins: [],
}
