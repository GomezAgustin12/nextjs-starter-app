/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Example: use CSS variables for theme colors
        primary: "var(--color-primary)",
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
      },
    },
  },
  plugins: [],
};
