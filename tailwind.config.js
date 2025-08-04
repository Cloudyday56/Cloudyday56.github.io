import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["luxury"],
          primary: "#ddefef",
          secondary: "#F3A326",
        },
      },
    ],
  },
};
