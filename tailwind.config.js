/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 670px)" },
      },
      spacing: {
        128: "30rem",
      },
      colors: {
        "color-primary": "#6441a5",
        "color-secondary": "#2a0845",
        "color-primary-light": "#772ce8",
        "color-error": "#FF9494",
        "color-success": "#4BB543",
        "color-card-container": "#b5a7c7",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
      keyframes: {
        "move-up": {
          "0%": { transform: "translateY(3rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "move-up": "move-up 1s ease-in 0.5s",
        "move-up-later": "move-up 1s ease-in 1.25s",
        fade: "fade 1s ease-in-out 1.75s",
        "fade-quick": "fade 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
