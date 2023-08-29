/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Wilkysta", "sans"],
      },
      colors: {
        "theme-green": "var(--theme-olive-green)",
        "theme-beige": "var(--theme-beige)",
        "theme-yellow": "var(--theme-yellow)",
      },
      backgroundColor: {
        "theme-green": "var(--theme-olive-green)",
        "theme-beige": "var(--theme-beige)",
        "theme-yellow": "var(--theme-yellow)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
