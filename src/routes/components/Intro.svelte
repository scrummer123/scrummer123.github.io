<style scoped lang="postcss">
.root {
  @apply flex md:mx-auto mx-5;

  min-height: 65vh;
}

.root > img {
  @apply m-auto mr-0 hidden sm:block;
  max-width: 240px;
  border-radius: 100%;
}

.root > div {
  @apply ml-10 max-w-lg m-auto;
  height: 1%;
}
</style>

<div class="root">
  <img class="img" src="../img/me.jpeg" alt="photo_of_me" />
  <div>
    <h1>Wie ben ik?</h1>
    <p>
      Leuk dat je besloot een kijkje te nemen naar mijn personalia. Mijn naam is
      Simon, ik ben een software ontwikkelaar met veel passie en ambitie voor
      alles wat ik maak. Wil je meer over mij weten? Neem dan een kijkje op deze
      site...
    </p>
  </div>
</div>
