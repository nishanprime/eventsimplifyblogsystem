const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.neutral,
        primary: "#5A86EF",
        secondary: "#B192F7",
        black: "#0F172A",
        white: "#FFFFFF",
        light_secondary: "#B192F720",
        light_primary: "#3E6AB320",
        primary_dark: "#3E6AB3",
        secondaryBackground: "#FAFAFA",
        border: "#C2CAD8",
        error: "#DC3444",
        light_gray: "#646464",
        lightGray: "#646464",
        input: {
          help: "#4A5567"
        },
        success: "#34D399"
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        quicksand: ["Quicksand", "sans-serif"],
        stock: [defaultTheme.fontFamily.quicksand]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
