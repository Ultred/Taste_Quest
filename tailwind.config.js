/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colorwhite: "#FFFFFF",
        colormain: "#38221C",
        colorbutton: "#1C382C",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Oswald: ["Oswald", "serif"],
      },
    },
  },
  plugins: [],
};
