/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#6441a5",
        "color-secondary": "#2a0845",
        "color-primary-light": "#772ce8",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
      keyframes: {
        "move-up": {
          "0%": { transform: "translateY(3rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "move-up": "move-up 1s ease-in 0.5s",
        "move-up-later": "move-up 1s ease-in 1.25s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
