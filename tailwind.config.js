/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF1168",
        secondary: "#341931",
        gradientR: "#EE0979",
        gradientL: "#FF6400",
      },
    },
  },
  plugins: [],
};
