/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        revealText: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "60%" },
        },
        fadeBlur: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "reveal-text": "revealText 1.2s ease-out forwards",
        "line-glow": "lineGrow 1.5s ease-out forwards",
        "fade-in-blur": "fadeBlur 1.4s ease-out forwards",
        "bounce-slow": "bounceSlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};