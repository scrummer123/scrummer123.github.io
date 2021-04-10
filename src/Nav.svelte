<style global lang="postcss">
.brand {
  @apply my-auto font-rewind text-5xl md:mr-52 xl:mr-64 mr-auto;
}

li {
  @apply block float-left;
}

nav {
  @apply py-9 bg-gradient-to-b from-indigo-navbarLight to-indigo-navbarLightGradient dark:from-indigo-navbar dark:to-indigo-navbarGradient flex flex-col justify-evenly justify-items-center  px-8;
  position: sticky;
  z-index: 4;
  top: -0.1px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.5s ease;
}

#sub-nav {
  @apply flex justify-evenly justify-items-center;
}

.mobile-navbar {
  @apply flex sm:hidden;
  overflow: hidden;
  position: sticky;
  min-height: 0px;
  height: 0px;
  transition: ease all 0.5s;
}

.nav-sticky {
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

ul li {
  @apply h-full inline-block;
  margin: 0 5px 0 0;
}

nav #sub-nav ul li.nav-item,
nav #sub-nav ul li.spacer {
  @apply hidden sm:block;
}

nav #sub-nav ul li.mobile-menu {
  @apply block sm:hidden;
}

nav #sub-nav ul li.spacer {
  @apply h-1/3 bg-gray-600 opacity-30 dark:bg-indigo-400;
  margin: 30px 20px 0 8px;
  width: 1px;
}

nav > #sub-nav ul li button {
  @apply my-5 px-3 shadow-none rounded sm:bg-gray-200 sm:dark:bg-indigo-700 bg-transparent;
  width: 50px;
  height: 50px;
}

#ul li a {
  @apply bg-transparent relative;
  display: inline-block;
}

#ul li a:after {
  @apply bg-gray-400 dark:bg-indigo-600 opacity-0;
  position: absolute;
  content: "";
  height: 2px;
  border-radius: 0px 0px 2px 2px;
  width: 100%;
  left: 0;
  bottom: -4px;
  transition: all ease-in-out 0.5s;
}

#ul li a:hover:after {
  bottom: 0px;
  opacity: 1;
}

#ul li a.selected {
  @apply cursor-default bg-gray-200 dark:bg-indigo-700;
}

#ul li a.selected:hover:after {
  opacity: 0;
}

#ul li a.mobile-nav-item {
  @apply my-1;
}

button.top-button {
  @apply bg-indigo-600 dark:bg-indigo-900 dark:hover:bg-indigo-600 transition duration-300 ease-in-out py-2 px-4 text-xl text-white w-full rounded-none hover:bg-indigo-500 shadow-none block;
}
</style>

<script>
import { onMount } from "svelte";
import WiMoonAltFirstQuarter from "svelte-icons/wi/WiMoonAltFirstQuarter.svelte";
import FaBars from "svelte-icons/fa/FaBars.svelte";

const navItems = [
  {
    name: "Home",
    uri: "/",
  },
  {
    name: "About",
    uri: "/about",
  },
];

onMount(() => {
  const observer = new IntersectionObserver(
    ([e]) => {
      e.target.classList.toggle("nav-sticky", e.intersectionRatio < 1);
      e.target.nextElementSibling.classList.toggle(
        "stay-fixed-sticky",
        e.intersectionRatio < 1
      );
    },
    { threshold: [1] }
  );

  observer.observe(document.getElementById("nav"));
});

function toggleTheme() {
  localStorage.theme = localStorage.theme === "light" ? "dark" : "light";
  document.body.classList = localStorage.theme;
}

function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  if (nav.style.minHeight === "0px" || nav.style.minHeight === "") {
    nav.style.minHeight = "55px";
    nav.style.height = 0;
  } else {
    nav.style.minHeight = 0;
    nav.style.height = 0;
  }
}

export let active;

$: isActive = (str) => active === str && "selected";
</script>

<button
  aria-label="Show work experience"
  class="top-button"
  on:click="{() => window.open('./img/cv.pdf')}">Bekijk CV</button>
<nav id="nav">
  <div id="sub-nav">
    <h1 class="brand">Simon</h1>
    <ul id="ul">
      {#each navItems as navItem}
        <li class="nav-item">
          <a class="{isActive(navItem.uri)}" href="{navItem.uri}"
            ><p>{navItem.name}</p></a>
        </li>
      {/each}
      <li class="spacer"></li>
      <li>
        <button
          on:click="{toggleTheme}"
          class="nav-button"
          aria-label="dark theme toggler"><WiMoonAltFirstQuarter /></button>
      </li>

      <li class="mobile-menu">
        <button
          on:click="{toggleMobileNav}"
          class="nav-button"
          aria-label="mobile navigation"><FaBars /></button>
      </li>
    </ul>
  </div>
  <div id="mobile-nav" class="mobile-navbar">
    <ul>
      {#each navItems as navItem}
        <li class="nav-item">
          <a
            on:click="{toggleMobileNav}"
            class="{isActive(navItem.uri)} mobile-nav-item"
            href="{navItem.uri}"><p>{navItem.name}</p></a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
<div class="stay-fixed"></div>
