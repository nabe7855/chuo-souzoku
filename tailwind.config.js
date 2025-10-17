/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // v4ではextend不要。theme自体に直接定義する
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
  },
  plugins: {
    // Tailwind v4ではpostcss経由のプラグイン管理が中心なので通常は空でOK
  },
};
