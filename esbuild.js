const {exec} = require("child_process");
const esbuild = require("esbuild");
const {watch} = require("chokidar");

esbuild.serve(
  {port: 8000, host: "127.0.0.1"},
  {
    entryPoints: ["src/EntryPoint/index.tsx"],
    bundle: true,
    sourcemap: true,
    define: {"process.env.NODE_ENV": '"development"'},
  }
).then(async () => {
  const watcher = watch('src/**/*.{js,jsx,ts,tsx,css}', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
  });

  watcher
    .on('error', error => console.log(`Watcher error: ${error}`))
    .on('ready', () => console.log('Initial scan complete. Ready for changes'))
    .on('change', async () => {
      const watchPostcss = await exec("npm run build:postcss");

      for await (const data of watchPostcss.stdout) {
        for await (const errData of watchPostcss.stderr) {
          console.error(`CSS ERROR: ${errData}`);
        }
        console.log(data);
      }
    });
});
