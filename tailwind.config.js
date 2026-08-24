/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ddefef",
        secondary: "#21aedc",
        "primary-content": "#0f1414",
        base: {
          100: "#09090b",
          200: "#18181b",
          300: "#27272a",
          800: "#1f1f23",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
