module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "146": "584px",
      },
      blur: {
        "4xl": "112px",
      },
      rotate: {
        "-8": "-8deg",
        "8": "8deg",
      },
      fontSize: {
        sm: ["0.875rem", "1.5rem"],
        base: ["1rem", "1.75rem"],
        lg: ["1.125rem", "2.25rem"],
        "2xl": ["1.5rem", "2.5rem"],
        "3xl": ["1.875rem", "3rem"],
        "5xl": [
          "3rem",
          {
            letterSpacing: "-0.05rem",
            lineHeight: "3.5rem",
          },
        ],
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
