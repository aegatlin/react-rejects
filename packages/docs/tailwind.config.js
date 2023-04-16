const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("react-rejects")), "**/*.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
