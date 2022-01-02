<template>
  <div id="app">
    <header>
      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-circle"></div>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
        <img class="icones-menu" src="@/assets/icones/maison.svg" alt="accueil">
        <img class="ubfc" src="@/assets/img/logo-ubfc.png" alt="ubfc">
        <ul>
          <li><a href="actualites.html">Actualités</a></li>
          <li><a href="informations.html">Qui sommes-nous ?</a></li>
          <li><a href="projets.html">Projets</a></li>
          <li><a href="conferences.html">Conférences</a></li>
          <li><a href="">Émancipation</a></li>
        </ul>
        <img class="icones-menu" src="@/assets/icones/user.svg" alt="profil">
      </nav>
      <img src="@/assets/img/fondheader2.png" alt="fond" class="fond-header">
      <img src="@/assets/icones/actualites.svg" alt="actualités" class="icones-header">
      <h1 class="titre-header">NOTRE ACTUALITÉ</h1>
    </header>
    <router-view/>
    <footer>
      <div class="boite">
        <ul>
          <li><a href=""><h2>LOREM</h2></a></li>
          <li><a href="">Ipsum</a></li>
          <li><a href="">Ipsum</a></li>
          <li><a href="">Ipsum</a></li>
        </ul>
      </div>
      <div class="boite">
        <ul>
          <li><a href=""><h2>LOREM</h2></a></li>
          <li><a href="">Ipsum</a></li>
          <li><a href="">Ipsum</a></li>
          <li><a href="">Ipsum</a></li>
        </ul>
      </div>
      <div class="boite">
        <ul>
          <li><a href=""><h2>LOREM</h2></a></li>
          <li><a href="">Ipsum</a></li>
          <li><a href="">Ipsum</a></li>
          <li><a href="">Ipsum</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
  @import '../src/assets/less/styles.less';
  @import '../src/assets/less/pages.less';
</style>
