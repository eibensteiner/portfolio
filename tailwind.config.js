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
      transitionProperty: {
        filter: "filter",
      },
    },
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      slate: {
        dark: {
          1: "#151718",
          2: "#1a1d1e",
          3: "#202425",
          4: "#26292b",
          5: "#2b2f31",
          6: "#313538",
          7: "#3a3f42",
          8: "#4c5155",
          9: "#697177",
          10: "#787f85",
          11: "#9ba1a6",
          12: "#ecedee",
        },
      },
      blue: {
        dark: {
          1: "#0f1720",
          2: "#0f1b2d",
          3: "#10243e",
          4: "#102a4c",
          5: "#0f3058",
          6: "#0d3868",
          7: "#0a4481",
          8: "#0954a5",
          9: "#0091ff",
          10: "#369eff",
          11: "#52a9ff",
          12: "#eaf6ff",
        },
      },
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.slate.dark.3", "currentColor"),
    }),
    fontFamily: {
      sans: ["Inter", "Helvetica Neue", "ui-sans-serif", "system-ui"],
      serif: ["IBM PLex Serif", "Georgia", "serif"],
    },
  },
  variants: {
    extend: {
      outline: ["focus-visible"],
    },
  },
  plugins: [],
};
