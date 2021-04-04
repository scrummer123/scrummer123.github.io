<style scoped lang="postcss">
div,
a {
  @apply inline-block;
}

a > h2 {
  @apply text-center text-3xl;
}

a#wrapper-link {
  @apply w-full mb-3 transition-none;
  margin-top: 7vh;
}

div {
  width: 100%;
}

ul {
  @apply mx-5 sm:mx-auto sm:w-5/12;
}

ul > a {
  @apply mb-0 w-full py-4 px-5;
  z-index: 3;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
}

ul > a.first {
  margin-top: 40px;
}

ul > a:hover {
  transform: scale(1.04);
  border-radius: 15px;
}

ul > a > li > h2 {
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

<a id="wrapper-link" href="#wrapper"><h2>Projecten</h2></a>
<div id="wrapper">
  {#await promise}
    <p class="waitingOrFailed">Loading repositories...</p>
  {:then projects}
    <ul>
      {#each Object.entries(projects) as [key, project]}
        <a
          href="{project.html_url}"
          class:first="{key == 0}"
          class="has-dark-mode"
          target="_blank">
          <li>
            <h2>{project.name || "Geen naam"}</h2>
            <p>{project.description || "Geen omschrijving"}</p>
          </li>
        </a>
      {/each}
    </ul>
  {:catch error}
    <p class="waitingOrFailed">{error}</p>
  {/await}
</div>
