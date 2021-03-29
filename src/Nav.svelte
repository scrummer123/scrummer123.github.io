<style global lang="postcss">
.brand {
  @apply my-auto font-rewind text-5xl md:mr-52 xl:mr-64 mr-auto;
}

.topButton {
  @apply w-full rounded-none hover:bg-indigo-500 shadow-none block;
}

li {
  @apply block float-left;
}

nav {
  @apply sticky w-full inline-block;
  z-index: 4;
  top: -0.1px;
}

#sub-nav {
  @apply flex justify-evenly justify-items-center bg-gradient-to-b from-white to-indigo-navbarLight dark:from-indigo-navbar dark:to-indigo-navbarGradient px-8;
  background-position: 500% 100%;
  backdrop-filter: blur(20px);
  transition: all 0.5s ease;
}

.sub-nav {
  @apply py-9 px-0;
}

.sub-nav-sticky {
  @apply py-3;
}

.stay-fixed {
  @apply w-full py-0;
  transition: all 0.5s ease;
  z-index: 1;
}

.stay-fixed-sticky {
  @apply py-6;
}

nav ul > li {
  @apply h-full inline-block;
  margin: 0 5px 0 0;
}

nav ul > li.nav-item,
nav ul > li.spacer {
  @apply hidden sm:block;
}

nav ul > li.spacer {
  @apply h-1/3 bg-gray-600 opacity-30 dark:bg-indigo-400;
  margin: 30px 20px 0 8px;
  width: 1px;
}

nav ul > li > button {
  @apply my-5 px-3 bg-gray-300 shadow-lg text-gray-600 dark:text-gray-200;
}

nav ul > li > a {
  display: inline-block;
}

nav ul > li > a:after {
  @apply bg-gray-300 dark:bg-indigo-600 opacity-0;
  position: absolute;
  content: "";
  height: 3px;
  border-radius: 0px 0px 2px 2px;
  width: 100%;
  left: 0;
  bottom: -4px;
  transition: all ease-in-out 0.5s;
}

nav ul > li > a:hover:after {
  bottom: 0px;
  opacity: 1;
}

nav ul > li > a.selected {
  @apply cursor-default bg-gray-200 dark:bg-indigo-700;
}

nav ul > li > a.selected:hover:after {
  opacity: 0;
}
</style>

<script>
import { onMount } from "svelte";
import WiMoonAltFirstQuarter from "svelte-icons/wi/WiMoonAltFirstQuarter.svelte";

const navItems = [
  {
    name: "Home",
    uri: "/",
  },
  {
    name: "About",
    uri: "/about",
  },
  {
    name: "Gear",
    uri: "/gear",
  },
];

onMount(() => {
  const observer = new IntersectionObserver(
    ([e]) => {
      e.target.classList.toggle("sub-nav-sticky", e.intersectionRatio < 1);
      e.target.parentNode.nextElementSibling.classList.toggle(
        "stay-fixed-sticky",
        e.intersectionRatio < 1
      );
    },
    { threshold: [1] }
  );

  observer.observe(document.getElementById("sub-nav"));
});

function toggleTheme() {
  localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
  document.body.classList = localStorage.theme;
}

export let active;

$: isActive = (str) => active === str && "selected";
</script>

<button aria-label="Show work experience" class="topButton">Bekijk CV</button>
<nav>
  <div id="sub-nav" class="sub-nav">
    <h1 class="brand">Simon</h1>
    <ul>
      {#each navItems as navItem}
        <li class="nav-item">
          <a class="{isActive(navItem.uri)}" href="{navItem.uri}"
            ><p>{navItem.name}</p></a>
        </li>
      {/each}
      <li class="spacer"></li>
      <li>
        <button on:click="{toggleTheme}" style="width: 57px"
          ><WiMoonAltFirstQuarter /></button>
      </li>
    </ul>
  </div>
</nav>
<div class="stay-fixed"></div>
