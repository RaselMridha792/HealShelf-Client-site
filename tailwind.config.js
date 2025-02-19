import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    themes: ["light", "dark",],
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["light", "dark"],
  },
}

