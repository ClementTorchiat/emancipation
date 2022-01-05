<template>
  <div id="app">
    <header>
      <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-circle"></div>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
        <router-link to="/"><img class="icones-menu" src="@/assets/icones/maison.svg" alt="accueil"></router-link>
        <router-link to="/"><img class="ubfc" src="@/assets/img/logo-ubfc.png" alt="ubfc"></router-link>
        <ul>
          <li><router-link to="Actualites" tag="a">Actualités</router-link></li>
          <li><router-link to="Projets" tag="a">Projets</router-link></li>
          <li><router-link to="Conferences" tag="a">Conférences</router-link></li>
          <li><router-link to="Emancipation" tag="a">Abécédaire</router-link></li>
          <li><router-link to="Emancite" tag="a">Émancité</router-link></li>
        </ul>
        <router-link to="Profil"><img class="icones-menu" src="@/assets/icones/user.svg" alt="profil"></router-link>
      </nav>
      <img src="@/assets/img/fondheader2.png" alt="fond" class="fond-header">
    </header>
    <router-view/>
    <footer>
      <div class="boite">
        <ul>
          <li><a><h2>NAVIGATION</h2></a></li>
          <li><router-link to="Actualites" tag="a">Actualités</router-link></li>
          <li><router-link to="Information" tag="a">Qui sommes-nous ?</router-link></li>
          <li><router-link to="Projets" tag="a">Projets</router-link></li>
          <li><router-link to="Conferences" tag="a">Conférences</router-link></li>
          <li><router-link to="Emancipation" tag="a">Émancipation</router-link></li>
        </ul>
      </div>
      <div class="boite">
        <ul>
          <li><a><h2>AUTRES PAGES</h2></a></li>
          <li><router-link to="MentionsLegales" tag="a">Mentions légales</router-link></li>
          <li><router-link to="Contact" tag="a">Contact</router-link></li>
          <li><router-link to="Profil" tag="a">Mon espace</router-link></li>
        </ul>
      </div>
      <div class="boite">
        <ul>
          <li><a><h2>UNIVERSITÉ</h2></a></li>
          <li><a onclick="window.open(this.href); return false;" href="https://www.ubfc.fr/"><img src="@/assets/img/logo-ubfc2.png" alt="UBFC"></a></li>
          <li><a onclick="window.open(this.href); return false;" href="https://www.ubfc.fr/">UBFC</a></li>
          <li><a onclick="window.open(this.href); return false;" href="https://www.u-bourgogne.fr/">Université de Bourgogne</a></li>
          <li><a onclick="window.open(this.href); return false;" href="https://www.univ-fcomte.fr/">Université de Franche-Comté</a></li>
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
