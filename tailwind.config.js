module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBackground: "#363849",
        premier: "#2b3147",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
