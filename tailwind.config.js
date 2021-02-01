module.exports = {
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        robregular: ['Roboto'],
        robmono: ['Roboto Mono'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
