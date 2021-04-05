<style scoped lang="postcss">
.root {
  @apply flex md:mx-auto mx-5 sm:px-5 md:px-16 flex-col sm:flex-row;

  min-height: 65vh;
}

.root > div.me {
  @apply m-auto pb-7 sm:pb-0 sm:mr-0;
  max-width: 240px;
  min-width: 170px;
}

.root > div.me > img {
  border-radius: 100%;
}

.root > div {
  @apply mx-3 my-auto sm:ml-10 max-w-lg sm:m-auto;
  height: 1%;
}
</style>

<div class="root">
  <div class="me">
    <img class="img" src="../img/me.jpeg" alt="photo_of_me" />
  </div>
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
