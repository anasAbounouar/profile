/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: "#e0f780",
        base: "#033f47",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
