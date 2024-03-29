/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin .2s linear ",
      },

      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      colors: {
        primary_color: "var(--primary_color)",
        secondary_color: "var(--secondary_color)",
      },
      fontFamily: {
        "sans-serif": ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        Header_shape1: "url('../../assets/Images/bannerImages/shape1.png')",
        Header_shape2: "url('../../assets/Images/bannerImages/shape2.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
