const esbuild = require("esbuild");

esbuild.serve(
  { port: 8000, host: "127.0.0.1" },
  {
    entryPoints: ["src/EntryPoint/index.tsx"],
    bundle: true,
    sourcemap: true,
    define: { "process.env.NODE_ENV": '"development"' },
  }
);
