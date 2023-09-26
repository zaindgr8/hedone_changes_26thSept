/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      screens: {
        xs: { min: "180px", max: "640px" },
        safari: {
          raw: "(min-color-index:0) and (-webkit-min-device-pixel-ratio:0)",
        },
      },
      fontFamily:{
        Gilda: ["Gilda"],
        Cinzel: ["Cinzel"],
        Montserrat:["Montserrat"]
        // Shippori: ['Shippori Mincho', 'serif']
      }
    },
  },
  plugins: [],
};

