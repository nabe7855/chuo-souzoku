/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      navy: {
        DEFAULT: "#0a2463",
        light: "#1e3a8a",
      },
      gold: {
        DEFAULT: "#d4af37",
        dark: "#b89b32",
      },
      "light-gray": "#f8f9fa",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ['"Hiragino Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
      serif: ["Georgia", "serif"],
    },

    // ✨ スクロールヒント用アニメーションを追加
    extend: {
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0" },
          "10%, 70%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        leftRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(6px)" },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 4s ease-in-out forwards",
        leftRight: "leftRight 1.2s ease-in-out infinite",
      },
    },
  },

  // ✅ スクロールバー表示用プラグインを追加
  plugins: [require("tailwind-scrollbar")],
};
