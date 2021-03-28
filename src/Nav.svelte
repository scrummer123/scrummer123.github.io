<style global lang="postcss">
.brand {
  @apply my-auto font-rewind text-5xl sm:mr-64;
}

.topButton {
  @apply w-full rounded-none hover:bg-indigo-500 shadow-none block;
}

li {
  @apply block float-left;
}

nav {
  @apply sticky w-full inline-block;
  top: -0.1px;
}

#sub-nav {
  @apply flex justify-evenly justify-items-center  dark:bg-indigo-navbar bg-indigo-navbarLight;
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
}

.stay-fixed-sticky {
  @apply py-6;
}

nav ul > li {
  margin: 0 5px 0 0;
}

nav ul > li > a {
  display: inline-block;
}

nav ul > li > a:after {
  @apply bg-indigo-300 dark:bg-indigo-600 opacity-0;
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
  @apply dark:bg-indigo-700 cursor-default;
}

nav ul > li > a.selected:hover:after {
  opacity: 0;
}
</style>

<script>
import { onMount } from "svelte";

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
      e.target.nextElementSibling.classList.toggle(
        "stay-fixed-sticky",
        e.intersectionRatio < 1
      );
    },
    { threshold: [1] }
  );

  observer.observe(document.getElementById("sub-nav"));
});

export let active;

$: isActive = (str) => active === str && "selected";
</script>

<button aria-label="Show work experience" class="topButton"
  >Bekijk werkervaring</button>
<nav>
  <div id="sub-nav" class="sub-nav">
    <h1 class="brand">Simon</h1>
    <ul>
      {#each navItems as navItem}
        <li>
          <a class="{isActive(navItem.uri)}" href="{navItem.uri}"
            ><p>{navItem.name}</p></a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="stay-fixed"></div>
</nav>
