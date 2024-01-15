// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        naranja: "#FF3D00",
        blanco: "#FFFFFF",
        negro: "#000000",
        verde: "#1D2828",
        gris: "#3E4747",
        orange: "#FFFFFF",
        white: "#FFFFFF",
        verdegris: "#1E3232",
        grisblanco: "#D9D9D9",
      },
    },
  },
  plugins: [],
});
