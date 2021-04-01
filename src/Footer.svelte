<style scoped lang="postcss">
footer {
  @apply dark:border-indigo-400 border-gray-400 py-5 flex mt-8;
  border-width: 1px 0 0 0;
  border-style: dashed;
}
footer > div {
  @apply mx-auto w-5/12;
}
footer small {
  @apply text-gray-600 dark:text-gray-300;
  font-style: oblique;
}

footer > div.content-wrapper {
  @apply w-1/6 flex;
}
footer div.spotify {
  @apply text-green-400 float-left my-auto mr-5;
  width: 32px;
}

footer > div.content-wrapper {
  @apply w-5/12 relative flex justify-between;
}

footer div.spotify-content {
  @apply flex flex-grow;
}

.scroll-up {
  @apply cursor-pointer;
  width: 35px;
}
</style>

<script>
import FaSpotify from "svelte-icons/fa/FaSpotify.svelte";
import FaChevronUp from "svelte-icons/fa/FaChevronUp.svelte";
import _ from "lodash";

let promise = Promise.resolve([]);

promise = (async () => {
  const request = await self.fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=simon-instance&api_key=${
      import.meta.env.LASTFM
    }&format=json`,
    {
      method: "GET",
    }
  );

  const response = await request.json();
  console.log(response);
  const track = _.get(response, "recenttracks.track[0]", false);
  const isPlaying = _.get(
    response,
    "recenttracks.track[0].@attr.nowplaying",
    false
  );
  const songData = {
    isPlaying,
    artist: track.artist["#text"],
    name: track.name,
  };

  if (request.ok) return songData;
  else if (!request.ok) throw response;
})();
</script>

<footer>
  <div class="content-wrapper">
    <div class="spotify-content">
      {#await promise}
        <p>Fetching recent song...</p>
      {:then song}
        <div class="spotify">
          <FaSpotify />
        </div>
        <div>
          <p>
            <b>{song.artist}</b> - {song.name}
          </p>
          {#if song.isPlaying}
            <small class="song-status">Now playing</small>
          {:else}
            <small class="song-status">Recently played</small>
          {/if}
        </div>
      {:catch _err}
        <p>Error fetching song</p>
      {/await}
    </div>
    <div class="nav">
      <div class="scroll-up" on:click="{() => window.scrollTo(0, 0)}">
        <FaChevronUp />
      </div>
    </div>
  </div>
</footer>
