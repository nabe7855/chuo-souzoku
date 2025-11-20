/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // -------------------------------
    // 🎨 カスタムカラー
    // -------------------------------
    extend: {
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
      },

      // -------------------------------
      // 📝 フォント
      // -------------------------------
      fontFamily: {
        sans: ['"Hiragino Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },

      // -------------------------------
      // ✨ アニメーション
      // -------------------------------
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
        ctaBounce: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(0.92)" },
          "100%": { transform: "scale(1)" },
        },
      },

      animation: {
        fadeInOut: "fadeInOut 4s ease-in-out forwards",
        leftRight: "leftRight 1.2s ease-in-out infinite",
        ctaBounce: "ctaBounce 180ms cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },

  // -------------------------------
  // 🔌 プラグイン
  // -------------------------------
  plugins: [require("tailwind-scrollbar")],
};
