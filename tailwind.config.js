/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mybg: "#14172B",
        mybg2: "#1D2035",
        primary: "#ECF0FF",
        secondary: "#737BAE",
        teritary: "#5A5F7D",
        positive: "#00FFA3",
        negative: "#FF4D4D",
      }
    },
  },
  plugins: [],
}
