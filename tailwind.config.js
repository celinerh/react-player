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
        additional: "#111625",
        gradientL: "#EE0979",
        gradientR: "#FF6400",
      },
    },
  },
  plugins: [],
};
