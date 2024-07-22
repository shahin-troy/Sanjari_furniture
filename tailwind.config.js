/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "pages/**/*.{js,ts,jsx,tsx}",
    // "./**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "app/**/*.{js,ts,jsx,tsx}", "components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["yekan", "sans-serif"],
        Vazir: ["Vazir", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
