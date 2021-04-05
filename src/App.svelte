<style global lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Daddy Rewind";
  src: url("./fonts/rewind.ttf") format("truetype");
}

@font-face {
  font-family: "Nunito Bold";
  src: url("./fonts/nunito.ttf") format("truetype");
}

body.dark {
  background: #080520;
}

p,
div,
span,
a {
  @apply dark:text-white text-xl;
}
p,
.scroll-up {
  @apply dark:text-gray-300 text-gray-600 leading-relaxed;
}
h1 {
  @apply dark:text-white text-3xl font-nunito;
}
h1.pageTitle {
  @apply text-4xl mb-3;
}

h2 {
  @apply dark:text-white text-2xl font-nunito;
}
h3 {
  @apply dark:text-white text-xl font-nunito;
}
a {
  @apply bg-white justify-items-center my-5 cursor-pointer dark:bg-transparent transition duration-300 ease-in-out py-2 px-4 text-lg rounded text-black dark:text-white;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
}

.has-dark-mode {
  @apply rounded border border-gray-400 dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:border-indigo-400 hover:bg-indigo-300 shadow-lg;
}
</style>

<script>
import Navaid from "navaid";
import { onDestroy } from "svelte";
import Nav from "./Nav.svelte";
import Footer from "./Footer.svelte";

localStorage.theme ||= "dark";
localStorage.theme === "dark"
  ? document.body.classList.add("dark")
  : document.body.classList.remove("dark");

let Route,
  params = {},
  active;
let uri = location.pathname;
$: active = uri || "/";

const run = (thunk, obj) => {
  const target = uri;
  thunk.then((m) => {
    if (target !== uri) return;
    params = obj || {};
    if (m.preload) {
      m.preload({ params }).then(() => {
        if (target !== uri) return;
        Route = m.default;
        window.scrollTo(0, 0);
      });
    } else {
      Route = m.default;
      window.scrollTo(0, 0);
    }
  });
};

const track = (obj) => {
  uri = obj.state || obj.uri || location.pathname;
  if (window.ga) ga.send("pageview", { dp: uri });
};

addEventListener("replacestate", track);
addEventListener("pushstate", track);
addEventListener("popstate", track);
const router = Navaid("/")
  .on("/", () => run(import("./routes/Home.svelte")))
  .on("/about", () => run(import("./routes/About.svelte")))
  .listen();

onDestroy(router.unlisten);
</script>

<Nav active="{active}" />

<main>
  <svelte:component this="{Route}" params="{params}" />
</main>

<Footer />
