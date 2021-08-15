module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: ["0.875rem", "1.5rem"],
        base: ["1rem", "1.75rem"],
        "2xl": ["1.5rem", "2.5rem"],
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "ui-sans-serif", "system-ui"],
      },
      transitionProperty: {
        filter: "filter",
      },
    },
  },
  variants: {
    extend: {
      outline: ["focus-visible"],
    },
  },
  plugins: [],
};
