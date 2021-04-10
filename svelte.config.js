const sveltePreprocess = require("svelte-preprocess");
const production = process.env.NODE_ENV === "production";

const preprocess = sveltePreprocess({
  postcss: { plugins: [require("tailwindcss"), require("autoprefixer")()] },
});

module.exports = {
  preprocess,
  dev: !production,
};
