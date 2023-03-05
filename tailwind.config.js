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
        pricebox: "#474A5B",
        trending: "#ECF0FF",
        shade: "rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        card: "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)"
      },
      boxShadow: {
        bitcoin: "inset 0px -24px 100px -100px #EAB300",
        solana: "inset 0px -24px 100px -100px #DC1FFF",
        ethereum: "inset 0px -24px 100px -100px #EDF0F4",
        binance: "inset 0px -24px 100px -100px #EAB300",
        shiba: "inset 0px -24px 100px -100px #E42D04",
      }
    },
  },
  plugins: [],
}
