/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#00040F",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#F2E3D5",
        "color-global": "#1B0D01",
        "color-blueDark": "#0F1624",
        "color-card": "#1B0D01",
        "primary-100": "#012E40",
        "primary-300": "#FFC132",
        "primary-500": "#FEC576",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        color1: "#012E40",
        color2: "#024959",
        color3: "#026773",
        color4: "#3CA6A6",
        color5: "#F2E3D5",
        color6: "#1B0D01",
        color7: "#00040F",
        color8: "#FEC576",
        color9: "#E30808",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Grotesk: ["Space Grotesk", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
