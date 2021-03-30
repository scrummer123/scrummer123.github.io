module.exports = {
  env: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
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
