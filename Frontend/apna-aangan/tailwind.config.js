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
        "theme-green": "#2E3A23",
        "theme-beige": "#F2E8D9",
      },
      backgroundColor: {
        "theme-green": "var(--theme-green)",
        "theme-beige": "var(--theme-beige)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
