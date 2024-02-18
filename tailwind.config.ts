import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        kanban: {
          purple: "#635FC7",
          lightPurple: "#A8A4FF",
          darkNavy: "#000112",
          darkGray: "#20212C",
          charcoal: "#2B2C37",
          mediumGray: "#3E3F4E",
          grayBlue: "#828FA3",
          paleBlue: "#E4EBFA",
          veryPaleBlue: "#F4F7FD",
          white: "#FFFFFF",
          red: "#EA5555",
          softRed: "#FF9898",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
