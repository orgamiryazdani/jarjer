/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "var(--color-gray)",
        yellow: "var(--color-yellow)",
        white: "var(--color-white)",
        category: "var(--color-category-bg)",
      },
    }
  },
  fontFamily: {
    sans: ["Vazir", ...fontFamily.sans],
  },
  plugins: [],
}