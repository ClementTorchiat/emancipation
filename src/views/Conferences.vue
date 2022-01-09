<template>
  <main>
    <img src="@/assets/icones/conferences.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">NOS CONFÉRENCES</h1>
    <div id="conferences-1">
      <h2>Retrouvez-nous sur YouTube et Twitch :</h2>
      <div>
        <a onclick="window.open(this.href); return false;" href="https://www.youtube.com/channel/UCXEJ7ttx7uZ2w5cV-noev6Q"><img src="@/assets/img/logo-youtube.png" alt="YouTube"></a>
        <a onclick="window.open(this.href); return false;" href="https://www.twitch.tv/pothem_llc_ubfc"><img src="@/assets/img/logo-twitch.png" alt="Twitch"></a>
      </div>
      <h2>Dernière vidéo :</h2>
      <iframe src="https://www.youtube.com/embed/rmMrGLSVIAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </main>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Conferences',
};
</script>
