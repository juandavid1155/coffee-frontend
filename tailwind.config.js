/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        gold: "#C8A46B",
      },

      maxWidth: {
        layout: "90%",  // en vez de 1400px — se adapta a cualquier pantalla
      },

      boxShadow: {

        gold: "0 0 30px rgba(200,164,107,0.35)",
      },

      animation: {

        shake: "shake 0.4s ease-in-out",
      },

      keyframes: {

        shake: {

          "0%": {
            transform: "translateX(0)"
          },

          "25%": {
            transform: "translateX(-5px)"
          },

          "50%": {
            transform: "translateX(5px)"
          },

          "75%": {
            transform: "translateX(-5px)"
          },

          "100%": {
            transform: "translateX(0)"
          },
        },
      },
    },
  },

  plugins: [],
}