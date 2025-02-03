/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#9DBDFF",
          DEFAULT: "#7695FF",
        },
        secondary: {
          light: "#FFD7C4",
          DEFAULT: "#FF9874",
        },
      },
      backgroundColor: {
        "gradient-start": "#7695FF", // primary DEFAULT
        "gradient-end": "#FF9874", // secondary DEFAULT
      },
    },
  },
  plugins: [],
};
