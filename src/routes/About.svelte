<style scoped lang="postcss">
div {
  @apply inline-block;
}
#wrapper {
  @apply w-full;
}

div#wrapper > div#content {
  @apply block w-5/12 mx-auto;
}

p {
  line-height: 27px;
}

.caption {
  @apply float-right pr-5;
}
.school-image {
  @apply mb-5 rounded-md;
  clear: both;
}

.pseudo-wrapper {
  @apply block relative;
}

.school-image-wrapper {
  @apply px-4;
}

.school-image-wrapper:before {
  @apply border-gray-400 dark:border-gray-800;
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 60px;
  height: 100px;
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-radius: 15px 0 0 0;
}

.school-image-wrapper:after {
  @apply border-gray-400 dark:border-gray-800;
  content: "";
  position: absolute;
  right: 0;
  bottom: 12px;
  width: 60px;
  height: 30px;
  border-width: 0 1px 1px 0px;
  border-style: solid;
  border-radius: 0 0 15px 0;
}
</style>

<script>
</script>

<div id="wrapper">
  <div id="content">
    <h1 class="pageTitle">About</h1>
    <p class="mb-3">
      Mijn naam is Simon, ik ben een achttien jarige student studerend op het
      Technovium in Nijmegen. In deze stad ben ik opgegroeid, deze stad heeft
      mij gevormd tot wie ik nu ben.
    </p>
    <p>
      Binnen mijn opleiding heb ik veel geleerd. Sinds ik ~16 was begon ik
      techniek steeds leuker te vinden. Uiteindelijk heb ik daarom ook besloten
      een technische opleiding te volgen.
    </p>
    <p>
      Naarmate ik meer met software in aanraking kwam, ben ik het steeds leuker
      gaan vinden. Uiteindelijk is mijn droom dan ook om als software
      ontwikkelaar aan de slag te kunnen... Full stack developer lijkt mij
      uiteindelijk het leukst om te kunnen.
    </p>

    <div class="pseudo-wrapper">
      <figcaption class="mt-5">
        <small class="caption">Afbeelding van mijn school</small>
      </figcaption>
      <div class="school-image-wrapper">
        <img src="../../img/school.jpg" alt="My school" class="school-image" />
      </div>
    </div>

    <h1>Sport</h1>
    <p>
      Naast de passie voor mijn vak, heb ik dat ook voor bepaalde sporten.
      Vroeger heb ik gevoetbald bij R.K.S.V. Brakkenstein. Hier heb ik geleerd
      om in teamverband samen te werken. Hedendaags loop ik hard en fitness ik,
      als vervanger voor het voetballen.
    </p>

    <h1 class="mt-5">Doel</h1>
    <p>
      Voor nu heb ik als doel om een product te maken waar mensen wat aan
      hebben. Daarbij streef ik erna om alles zo perfect mogelijk te maken.
      Recentelijk ben ik bijvoorbeeld bezig geweest met het maken van een FTP
      client, omdat filezilla niet een ideaal interface heeft in mijn ogen.
    </p>
  </div>
</div>
