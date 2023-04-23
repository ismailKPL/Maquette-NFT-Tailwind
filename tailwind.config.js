/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html'],
  content: ["./index.html"],
  theme: {
    extend: {
      height: {
        'vh': '85vh', // définit une hauteur maximale de 85vh
      },
      backgroundImage: {
        'hero': "url('/imgs/bg.png')",
      },
      fontFamily: {
        'sedgwick': ['Sedgwick Ave Display', 'cursive'],
      }
    },
    
  },
  plugins: [],
}

