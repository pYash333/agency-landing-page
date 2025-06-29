/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    extend: {
      colors: {
        "primary-color": "#4CAF4F",
        "secondary-color": "#4D4D4D",
        "tertiary-color": "#717171",
        "quaternary-color": "#263238",
        "fifth-color": "#F5F7FA",
        "link-color": "#18191F",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
