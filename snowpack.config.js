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
};
