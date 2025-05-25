/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("../../packages/ui/tailwind.config.js")],
} 