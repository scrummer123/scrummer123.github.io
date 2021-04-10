<style scoped lang="postcss">
div,
a {
  @apply inline-block;
}

a h2 {
  @apply text-3xl;
}

a h2.title {
  @apply text-center;
}

a#wrapper-link {
  @apply w-full mb-3 transition-none;
  margin-top: 7vh;
}

div {
  width: 100%;
}

ul {
  @apply mx-5 sm:mx-auto sm:w-7/12 lg:w-5/12;
}

ul li {
  @apply w-full;
}

ul li a {
  @apply mb-2 w-full py-4 px-5;
  z-index: 3;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
}

ul li a.first {
  margin-top: 40px;
}

ul li a:hover {
  transform: scale(1.04);
  border-radius: 15px;
}

ul li a h2 {
  font-size: 130%;
}

.error-wrapper {
  @apply w-full mx-0;
}

p.waitingOrFailed {
  @apply text-center;
}
</style>

<script>
import { onMount } from "svelte";

let promise = Promise.resolve([]);

promise = (async () => {
  const response = await self.fetch(
    "https://api.github.com/users/simon-instance/repos"
  );

  if (response.ok) return await response.json();
  else throw new Error(`${response.status}`);
})();

onMount(() => {
  const wrapper = document.getElementById("wrapper");
  if (promise instanceof Error) {
    wrapper.classList = "";
    wrapper.classList.add("error-wrapper");
  } else wrapper.classList.remove("error-wrapper");
});
</script>

<a id="wrapper-link" href="#wrapper"><h2 class="title">Projecten</h2></a>
<div id="wrapper">
  {#await promise}
    <p class="waitingOrFailed">Loading repositories...</p>
  {:then projects}
    <ul>
      {#each Object.entries(projects) as [key, project]}
        <li>
          <a
            href="{project.html_url}"
            class:first="{key == 0}"
            class="has-dark-mode"
            target="_blank"
            rel="noreferrer">
            <h2>{project.name || "Geen naam"}</h2>
            <p>{project.description || "Geen omschrijving"}</p>
          </a>
        </li>
      {/each}
    </ul>
  {:catch error}
    <p class="waitingOrFailed">{error}</p>
  {/await}
</div>
