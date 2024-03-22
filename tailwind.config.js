/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        sx: "320px",
      },
      maxWidth: {
        container: "1440px",
      },
      minWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
