module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#71DFE7",
        secondary: "#C2FFF9",
        accent: "#FFE652",
      },
      boxShadow: {
        stripe:
          "0px 2px 5px -1px rgba(50, 50, 93, 0.25), 0px 1px 3px -1px rgba(0, 0, 0, 0.003)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
