const theme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
  // See https://tailwindcss.com/docs/configuration#important
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./hugo_stats.json", "./layouts/**/*.html"],
    extractors: [
      {
        extractor: (content) => {
          let els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ["json"],
      },
    ],
    mode: "all",
  },
  theme: {
    extend: {
      fontFamily: {
        robregular: ["Roboto-Regular"],
        robmono: ["Roboto-mono"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [typography],
};

// https://github.com/bep/hugo-starter-tailwind-basic/blob/master/tailwind.config.js
