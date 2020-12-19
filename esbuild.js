const { exec } = require("child_process");
const esbuild = require("esbuild");

esbuild.serve(
  { port: 8000, host: "127.0.0.1" },
  {
    entryPoints: ["src/EntryPoint/index.tsx"],
    bundle: true,
    sourcemap: true,
    define: { "process.env.NODE_ENV": '"development"' },
  }
).then(async () => {
  const watchPostcss = await exec("npm run watch:postcss:index");

  for await (const data of watchPostcss.stdout) {
    for await (const errData of watchPostcss.stderr) {
      console.error(`CSS ERROR: ${errData}`);
    }
    console.log(data);
  }

});
