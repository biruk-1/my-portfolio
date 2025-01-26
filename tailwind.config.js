/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#2563EB", // Blue
          secondary: "#7C3AED", // Purple
          accent: "#F59E0B", // Orange
          dark: "#1E293B", // Dark Gray
          light: "#F8FAFC", // Light Gray
        },
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [],
  };