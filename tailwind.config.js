/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,eot,svg,ttf,woff,woff2}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'avenir': "'Avenir LT Std', sans",
      },
      backgroundImage:{
        'desktop': "url('../img/foto-fondo-desktop.webp')",
        'mobile': "url('../img/portada-responsive.png')",
        'nos': "url('../img/franja.webp')",
        'esquemas':"url('../img/fondo-esquemas.webp')"
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1280px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
