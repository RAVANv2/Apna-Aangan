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
      backgroundColor: {
        "theme-green": "var(--theme-green)",
        "theme-beige": "var(--theme-beige)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
