/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 30px #ff0000" },
          "50%": { textShadow: "0 0 20px #00ff00" },
          "75%": { textShadow: "0 0 30px #FFFF00" },
          "100%": { textShadow: "0 0 30px #ff0000" },
        },
      },
      animation: {
        glow: "glow 2s infinite",
      },
    },
  },
  plugins: [],
}

