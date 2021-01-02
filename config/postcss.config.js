const hugoRoot = __dirname + "/../../";
const configRoot = __dirname;

const productionConfig = {
    cssnano: {}
};

module.exports = {
    plugins: {
        "postcss-import": { path: hugoRoot },
        "tailwindcss": { config: configRoot + "/tailwind.config.js" },
        "autoprefixer": { path: hugoRoot },
        ...(process.env.HUGO_ENVIRONMENT === "production" && productionConfig)
    }
        // require("postcss-import")({
        //     path: [hugoRoot]
        // }),
        // require("tailwindcss")(configRoot + "/tailwind.config.js"),
        // require("autoprefixer")({
        //     path: [hugoRoot]
        // }),
};