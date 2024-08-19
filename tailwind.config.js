/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6fcd4", // En açık ton
          200: "#c7f8a4",
          300: "#a5f272",
          400: "#85eb4a",
          500: "#5fe200", // Base color
          600: "#4bc900",
          700: "#35af00",
          800: "#229500",
          900: "#0a7300", // En koyu ton
        },
        // secondary: {
        //   100: "#f2f9ff", // Lightest
        //   200: "#b3daff",
        //   300: "#80c0ff",
        //   400: "#4da5ff",
        //   500: "#0061AE", // Base color
        //   600: "#005a9f",
        //   700: "#004d89",
        //   800: "#003f72",
        //   900: "#003259", // Darkest
        // },
        // secondary: {
        //   DEFAULT: "#1D4ED8", // Mavi rengin varsayılan değeri
        //   light: "#3B82F6", // Açık tonu
        //   dark: "#1E40AF", // Koyu tonu
        // },
      },
      fontFamily: {
        sans: ["sofia-pro", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      backgroundPosition: {
        "bottom-center": "center bottom",
      },
    },
  },
  plugins: [],
};
