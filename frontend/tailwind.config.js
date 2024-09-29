/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        san: ["Gilroy-Bold","Gilroy-Heavy", "Gilroy-Light", "Gilroy-Medium", "Gilroy-Regular", "sans-serif"],
      },
      colors:{
        primary: "#F9F9FB",
        secondary: "#0A0708",
        brand: "#FF4C15",
      },
    },
  },
  plugins: [],
}

