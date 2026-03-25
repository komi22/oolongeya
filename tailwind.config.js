/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#5aa9ff",
          light: "#8bc3ff",
          dark: "#3f7ad8",
        },
        signal: {
          DEFAULT: "#ff9d5c",
          light: "#ffc491",
          dark: "#e67a3a",
        },
        ink: {
          50: "#eef2f8",
          100: "#dde4ef",
          200: "#bec8d8",
          300: "#9ca9be",
          400: "#7f8ca6",
          500: "#64718a",
          600: "#4b566d",
          700: "#323b50",
          800: "#1a2233",
          900: "#101723",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        ui: ["var(--font-ui)"],
        ko: ["var(--font-ko)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 28px 90px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
