/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "390px",
      sm: "576px",
      md: "768px",
      tab: "860px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
    fontFamily: {
      livvic: ["Livvic", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
