/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Scans all HTML files in the root directory
    "./src/**/*.{html,js}" // Scans all HTML and JS files in the src folder and its subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


