<template>
  <main>
    <div class="header">
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
      <img src="@/assets/img/fondheader2.png" alt="fond" class="fond-accueil">
      <div class="header-accueil-container">
        <img src="@/assets/img/logo-ubfc2.png" alt="logo" id="icone-ubfc-accueil">
        <h1 id="titre-accueil">POTHEM</h1>
        <p>Pôle Thématique langues lettres et communications</p>
        <img src="@/assets/icones/fleche-bas.svg" alt="flèche" id="flèche-bas">
      </div>
    </div>
    <div id="accueil-1">
      <div class="flex">
        <div class="gauche">
          <a href=""><img src="@/assets/icones/actualites2.svg" alt="actualités"></a>
        </div>
        <div class="milieu">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed
            orci massa, elementum nec arcu id, venenatis pulvinar nunc. Donec tellus risus,
            consectetur ac ipsum ac, sollicitudin varius felis. Nam in lacinia nisl. Vestibulum
            dictum, est eu ullamcorper vehicula, diam sapien aliquet magna, non</p>
          <a href="" class="savoir-plus">En savoir plus</a>
        </div>
        <div class="droite">
          <img src="@/assets/img/illustation1.png" alt="illustration">
        </div>
      </div>
    </div>
    <div id="accueil-2">
      <div class="flex">
        <div class="gauche">
          <img src="@/assets/img/illustration2.png" alt="illustration">
        </div>
        <div class="milieu">
          <a href=""><img src="@/assets/icones/conferences2.svg" alt="conférences"></a>
        </div>
        <div class="droite">
          <h2>Dernière Conférence</h2>
          <a href=""><img src="@/assets/img/exemple-conference.png" alt="conférence"></a>
        </div>
      </div>
      <a href="" class="voir-plus">Voir plus</a>
    </div>
    <div id="accueil-3">
      <div class="flex">
        <div class="gauche">
          <a href=""><img src="@/assets/icones/logo-emancipation-2.svg" alt="émancipation"></a>
        </div>
        <div class="droite">
          <h2>Projet Émancipation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed
            orci massa, elementum nec arcu id, venenatis pulvinar nunc. Donec tellus risus,
            consectetur ac ipsum ac, sollicitudin varius felis. Nam in lacinia nisl. Vestibulum
            dictum, est eu ullamcorper vehicula, diam sapien aliquet magna, non ultricies enim
            turpis sed odio. Morbi ut nulla pretium, scelerisque nisi eu, molestie tortor. Integer
            ut felis eu dolor mattis aliquam vel ut dolor. Suspendisse at nibh lobortis, tincidunt
            lorem ut, ultricies tellus.</p>
          <a href="" class="savoir-plus">En savoir plus</a>
        </div>
      </div>
    </div>
    <div id="accueil-4">
      <div class="flex">
        <div class="gauche">
          <a href=""><img src="@/assets/icones/informations2.svg" alt="qui sommes-nous ?"></a>
        </div>
        <div class="droite">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed
            orci massa, elementum nec arcu id, venenatis pulvinar nunc. Donec tellus risus,
            consectetur ac ipsum ac, sollicitudin varius felis. Nam in lacinia nisl. Vestibulum
            dictum, est eu ullamcorper vehicula, diam sapien aliquet magna, non ultricies enim
            turpis sed odio. Morbi ut nulla pretium, scelerisque nisi eu, molestie tortor. Integer
            ut felis eu dolor mattis aliquam vel ut dolor. Suspendisse at nibh lobortis.</p>
          <a href="" class="voir-plus">Découvrir</a>
        </div>
      </div>
    </div>
    <div id="accueil-5">
      <div class="flex">
        <div class="gauche">
          <a href=""><img src="@/assets/icones/projets2.svg" alt="projets"></a>
        </div>
        <div class="droite">
          <h2>Dernier Projet</h2>
          <img src="@/assets/img/exemple-projet.png" alt="projet">
          <div class="flex-2">
            <p>Lorem ipsum</p>
            <p>09/10/2021</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed
            orci massa, elementum nec arcu id, venenatis pulvinar nunc.</p>
          <a class="savoir-plus">Voir tous les projets</a>
        </div>
      </div>
    </div>
    <div id="accueil-6">
      <div class="flex">
        <div class="gauche">
          <a href=""><img src="@/assets/icones/contact2.svg" alt="contact"></a>
        </div>
        <div class="droite">
          <h2>POTHEM LLC - Bourgogne-Franche-Comté</h2>
          <p>4, place Tharradin 25 200 Montbéliard<br>
            <strong>Tél.</strong> +33 (0)3 81 99 47 34<br>
            <strong>Mail DUT MMI :</strong> dut-mmi-montbeliard@univ-fcomte.fr<br>
            <strong>Mail Licence pro Webdesign :</strong> lp-wd-montbeliard@univ-fcomte.fr</p>
          <a class="voir-plus">Nous écrire</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
@import "/src/assets/less/styles.less";

</style>
