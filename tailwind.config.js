/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colormain: "#743000",
        colorsec: "#FFCA52",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Serif: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [],
};
