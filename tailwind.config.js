/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: '"Roboto Slab", serif;',
        redHadDisplay: ' "Red Hat Display", serif;',
      },

      colors: {
        primary: "#30f557",
        secondary: "#636662",
        blackGreen: "#090b08",
      },
    },
  },
  plugins: [],
};
