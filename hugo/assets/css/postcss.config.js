const hugoRoot = __dirname + "/../../";
const cssnano = require("cssnano");

module.exports = (ctx) => ({
    plugins: [
        require("postcss-import")({
            path: [hugoRoot]
        }),
        require("tailwindcss")(hugoRoot + "assets/css/tailwind.config.js"),
        require("autoprefixer")({
            path: [hugoRoot]
        }),
        ...(process.env.HUGO_ENVIRONMENT === "production" ? [cssnano] : [])
    ]
});