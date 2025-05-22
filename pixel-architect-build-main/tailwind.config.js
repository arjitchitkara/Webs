/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body:    ["Inter",   "sans-serif"],
      },
      colors: {
        construction: {
          dark:  "#0E0E0E",
          light: "#E5E5E5",
          muted: "hsl(var(--muted))",     // ← add this line
        },
        silver: "#C0C0C0"
      }
    }
  },
  plugins: []
}
