/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "480px",
      md: "547px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1680px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        brown: "#B85E3D",
        lightBrown: " #FFEEE4",
        darkBlue: "#112B3C ",
        gray: " #828282",
        offgray: "#fdfdfd",
        cardColor: "#FFF8F0",
      },
    },
  },
  plugins: [],
};
