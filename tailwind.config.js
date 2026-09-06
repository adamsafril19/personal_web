/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "abyssal-base": "#1A2F38",
        "abyssal-accent": "#FF9F1C",
        "abyssal-accent-10": "rgba(255, 159, 28, 0.1)",
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
      backgroundColor: {
        "gradient-start": "#7695FF",
        "gradient-end": "#FF9874",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        "blob": "blob 7s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
