<style scoped lang="postcss">
footer {
  @apply border-indigo-400 p-5;
  border-width: 1px 0 0 0;
  border-style: dashed;
}
footer > div {
  @apply mx-auto w-5/12;
}
</style>

<script>
import Intro from "./components/Intro.svelte";
import RepoList from "./components/RepoList.svelte";

let promise = Promise.resolve([]);

promise = (async () => {
  const tokenHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic " +
      btoa(
        "2d3fa6644cb348e1b986908b79479f47" + ":" + process.env.CLIENT_SECRET
      ),
  };

  const tokenResponse = await self.fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: tokenHeaders,
      body: "grant_type=client_credentials&scope=user-read-recently-played",
    }
  );

  const token = await tokenResponse
    .json()
    .then((obj) =>
      obj.hasOwnProperty("access_token")
        ? `${obj.token_type} ${obj.access_token}`
        : new Error("Couldn't fetch an access token")
    );

  console.log(token);
  const headers = {
    Authorization: token,
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const response = await self.fetch(
    "https://api.spotify.com/v1/me/player/recently-played",
    {
      method: "GET",
      headers,
    }
  );

  let result = await response.json();

  if (response.ok && result.items[0].track !== undefined)
    return result.items[0].track;
  else if (!response.ok) throw result.error;
  else throw { status: 400, message: "Something went wrong" };
})();
</script>

<Intro />
<RepoList />

<footer>
  {#await promise}
    <div>Loading recent played song...</div>
  {:then song}
    <div>
      <p>
        <b
          >{song.artists.map(
            (artist, key) => `${key !== 0 ? " " : ""} ${artist.name}`
          )}</b>
        -
        {song.name}
      </p>
    </div>
  {:catch error}
    <div>Error {error.status}: {error.message}</div>
  {/await}
</footer>
