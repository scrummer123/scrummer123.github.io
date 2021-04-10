const production = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    LASTFM: process.env.LASTFM,
  },
  mount: {
    dist: "/",
    src: "/",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    [
      "@snowpack/plugin-build-script",
      {
        cmd: "postcss",
        input: [".css"],
        output: [".css"],
      },
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  buildOptions: {
    sourcemap: false, // not working yet :(. Snowpack needs to resolve this issue.
  },
};
