/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 确保包含所有 JS/TS/JSX/TSX 文件
    "./src/pages/**/*.{js,ts,jsx,tsx}", // 或者单独指定 pages 目录
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
