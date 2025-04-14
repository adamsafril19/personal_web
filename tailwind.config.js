/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "abyssal-base": "#1A2F38",
        "abyssal-accent": "#FF9F1C",
        "abyssal-accent-10": "rgba(255, 159, 28, 0.1)", // Added color with 10% opacity
        primary: {
          light: "#9DBDFF",
          DEFAULT: "#7695FF",
        },
        secondary: {
          light: "#FFD7C4",
          DEFAULT: "#FF9874",
        },
      },
      boxShadow: {
        "glow-accent": "0 0 20px 2px rgba(255,159,28,0.3)",
        "glow-inner": "inset 0 0 15px rgba(255,159,28,0.2)",
      },
      // Removed the misplaced secondary color definition and extra braces
      backgroundColor: {
        "gradient-start": "#7695FF", // primary DEFAULT
        "gradient-end": "#FF9874", // secondary DEFAULT
      },
    }, // Correct closing brace for extend
  },
  plugins: [],
};
