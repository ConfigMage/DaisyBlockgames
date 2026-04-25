import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDF6E3",
        "cream-card": "#FFFDF5",
        gold: {
          DEFAULT: "#E8C85A",
          deep: "#D4A843",
          stitch: "#C9A84C",
        },
        sage: "#7B9E6B",
        cocoa: "#6B5B3E",
        blush: "#E8A0BF",
      },
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(201, 168, 76, 0.18)",
        card: "0 6px 22px rgba(107, 91, 62, 0.12)",
      },
      animation: {
        "petal-fall": "petalFall 12s linear infinite",
        sparkle: "sparkle 2.4s ease-in-out infinite",
        sway: "sway 4s ease-in-out infinite",
        bloom: "bloom 700ms cubic-bezier(.2,.9,.3,1.4) both",
        "ribbon-unfurl": "ribbonUnfurl 700ms cubic-bezier(.2,.9,.3,1.4) both",
        "heart-float": "heartFloat 1200ms ease-out both",
        "fade-out": "fadeOut 600ms ease-in 4.4s forwards",
        drift: "drift 18s linear infinite",
        "pulse-soft": "pulseSoft 2.6s ease-in-out infinite",
      },
      keyframes: {
        petalFall: {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateY(110vh) rotate(360deg)",
            opacity: "0",
          },
        },
        sparkle: {
          "0%, 100%": { transform: "scale(0.7)", opacity: "0.4" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        bloom: {
          "0%": { transform: "scale(0.2) rotate(-20deg)", opacity: "0" },
          "60%": { transform: "scale(1.15) rotate(8deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        ribbonUnfurl: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "60%": { transform: "scaleX(1.05)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        heartFloat: {
          "0%": { transform: "translateY(20px) scale(0.6)", opacity: "0" },
          "60%": { transform: "translateY(-6px) scale(1.1)", opacity: "1" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-12px)" },
        },
        drift: {
          "0%": { transform: "translateX(-10vw)" },
          "100%": { transform: "translateX(110vw)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
