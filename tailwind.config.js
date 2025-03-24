/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/informed-choice/layouts/**/*.html",
    "./content/**/*.{html,md}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (adjust to match your Vue app)
        primary: {
          50: "#EBF5FF",
          100: "#E1EFFE",
          200: "#C3DDFD",
          300: "#A4CAFE",
          400: "#76A9FA",
          500: "#3F83F8", // Main brand color (example)
          600: "#1C64F2",
          700: "#1A56DB",
          800: "#1E429F",
          900: "#233876",
        },
        secondary: {
          // Add your secondary color palette
        },
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        // Add more custom fonts as needed
      },
      // Add any additional theme customizations
      spacing: {
        // Custom spacing if needed
      },
      borderRadius: {
        // Custom border radius if needed
      },
      boxShadow: {
        // Custom shadows if needed
      },
    },
  },
  plugins: [
    // Add only the plugins you need (no component libraries)
    require("@tailwindcss/typography"), // Optional: for better typography
    require("@tailwindcss/forms"), // Optional: for better form styling
  ],
};
