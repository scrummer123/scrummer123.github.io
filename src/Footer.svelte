<style scoped lang="postcss">
footer {
  @apply dark:border-indigo-400 border-gray-400 py-5 mt-8;
  border-style: dashed;
  border-width: 1px 0 0 0;
}

footer > div.content-wrapper {
  @apply mx-5 sm:mx-auto sm:w-5/12 flex justify-between;
}

footer > div.content-wrapper > div.spotify-root {
  @apply flex-grow;
}

footer > div.content-wrapper > div.spotify-root > div.song-data {
  @apply mr-0;
}

footer div.spotify {
  @apply text-green-400 inline-block float-left mr-4 h-full flex justify-items-center;
  width: 32px;
}

footer span.song-spacer {
  @apply hidden md:inline;
}

footer div.song-data > div > p {
  @apply inline;
}

footer div.song-data > div > small {
  @apply block;
  font-style: oblique;
}

footer div.scroll-up {
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
    <div class="spotify-root">
      {#await promise}
        <p>Fetching recent song...</p>
      {:then song}
        <div class="spotify">
          <FaSpotify />
        </div>
        <div class="song-data">
          <div>
            <b>{song.artist}</b>
            <span class="song-spacer"> - </span>
            <p>{song.name}</p>

            {#if song.isPlaying}
              <small>Now playing</small>
            {:else}
              <small class="song-status">Recently played</small>
            {/if}
          </div>
        </div>
      {:catch _err}
        <p>Error fetching song</p>
      {/await}
    </div>

    <div class="scroll-up" on:click="{() => window.scrollTo(0, 0)}">
      <FaChevronUp />
    </div>
  </div>
</footer>
