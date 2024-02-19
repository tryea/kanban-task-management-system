import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
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
      fontSize: {
        xl: "1.5rem",
        l: "1.125rem",
        base: "1rem",
        sm: "0.75rem",
      },
      padding: {
        "22": "5.5rem",
      },
      width: {
        "38": "9.5rem",
        "69": "17.25rem",
        "75": "18.75rem",
      },
      minWidth: {
        "38": "9.5rem",
        "69": "17.25rem",
        "75": "18.75rem",
        dvw: "100dvw",
      },
      maxWidth: {
        "38": "9.5rem",
        "69": "17.25rem",
        "75": "18.75rem",
      },
      minHeight: {
        "38": "9.5rem",
        "75": "18.75rem",
      },
      maxHeight: {
        "38": "9.5rem",
        "69": "17.25rem",
        "75": "18.75rem",
      },
      height: {
        "38": "9.5rem",
        "69": "17.25rem",
        "75": "18.75rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addBase, addComponents, addUtilities, addVariant, theme }) => {
      addUtilities({
        ".heading-xl": {
          fontWeight: theme("fontWeight.bold"),
          fontSize: theme("fontSize.l"),
          lineHeight: "1.25",
        },
        ".heading-l": {
          fontWeight: theme("fontWeight.bold"),
          fontSize: theme("fontSize.xl"),
          lineHeight: "1.25",
        },
        ".heading-m": {
          fontWeight: theme("fontWeight.bold"),
          fontSize: theme("fontSize.base"),
          lineHeight: "1.25",
        },
        ".heading-sm": {
          fontWeight: theme("fontWeight.bold"),
          fontSize: theme("fontSize.sm"),
          lineHeight: "1.33333333",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
