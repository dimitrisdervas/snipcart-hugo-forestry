let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');
const easyimport = require('postcss-easy-import');

module.exports = {
  // eslint-disable-next-line no-process-env
  plugins: [
        easyimport,
        tailwind,
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [autoprefixer] : []),
  ],
};

// https://github.com/bep/hugo-starter-tailwind-basic/blob/master/postcss.config.js

// module.exports = {
// 	plugins: {
// 	  tailwindcss: {},
// 	  autoprefixer: {},
// 	},
//   }


