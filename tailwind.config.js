/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ make sure this includes your app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "sans-serif"],
        integral: ["var(--font-integral)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
