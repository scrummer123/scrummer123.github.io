<style scoped lang="postcss">
h2 {
  @apply mx-auto mb-7 w-full text-center;
  margin-top: 65px;
}

div,
ul {
  @apply mx-72 inline-block;
}

ul > li {
  @apply rounded border border-gray-400 mb-3 w-full;
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

<a href="#wrapper"><h2>Projecten</h2></a>
<div id="wrapper">
  {#await promise}
    <p class="waitingOrFailed">Data inladen...</p>
  {:then projects}
    <ul>
      {#each projects as project}
        <li>{project.name}</li>
      {/each}
    </ul>
  {:catch error}
    <p class="waitingOrFailed">{error}</p>
  {/await}
</div>
