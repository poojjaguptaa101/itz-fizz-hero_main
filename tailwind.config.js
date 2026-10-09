/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        surface: "#101216",
        surfaceLight: "#181B22",
        neon: {
          green: "#00FF66",
          lime: "#CCFF00",
          glow: "rgba(0, 255, 102, 0.4)",
        },
        titanium: "#8E8E93",
        smoke: "#1F232B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-orbitron)", "var(--font-syne)", "sans-serif"],
      },
      letterSpacing: {
        ultrawide: "0.28em",
        mega: "0.35em",
      },
      boxShadow: {
        "neon-sm": "0 0 15px rgba(0, 255, 102, 0.35)",
        "neon-md": "0 0 30px rgba(0, 255, 102, 0.5)",
        "neon-lg": "0 0 60px rgba(0, 255, 102, 0.65)",
        "lime-glow": "0 0 40px rgba(204, 255, 0, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
