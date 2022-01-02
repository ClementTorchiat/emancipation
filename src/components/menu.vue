<template>
  <div class="comp-menu">
    <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
      <div class="nav-toggle-circle"></div>
      <div class="nav-toggle-bar"></div>
    </div>
    <nav class="menu">
      <img class="icones-menu" src="../assets/icones/maison.svg" alt="accueil">
      <img class="ubfc" src="public/img/logo-ubfc.png" alt="ubfc">
      <ul>
        <li><a href="">Actualités</a></li>
        <li><a href="">Qui sommes-nous ?</a></li>
        <li><a href="">Projets</a></li>
        <li><a href="">Conférences</a></li>
        <li><a href="">Émancipation</a></li>
      </ul>
      <img class="icones-menu" src="../assets/icones/user.svg" alt="profil">
    </nav>
    <img src="public/img/fondheader2.png" alt="fond" class="fond-header">
    <img src="../assets/icones/actualites.svg" alt="actualités" class="icones-header">
    <h1>NOTRE ACTUALITÉ</h1>
    <slot>foo</slot>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-toggle{
  /*background-color: crimson;*/
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: fixed;
  @media screen and (min-width: 800px) {
    display: none;
  }
}

.nav-toggle-bar, .nav-toggle-bar::before, .nav-toggle-bar::after{
  content: "";
  background-color: white;
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  transition: all .4s ease-in-out;
}

.nav-toggle-circle {
  content: "";
  background-color: #4F7E9F;
  width: 150%;
  height: 150%;
  position: absolute;
  left: 0;
  transition: all .4s ease-in-out;
  border-radius: 100px;
  transform: translateX(-15%);
}

.nav-toggle-bar::before{
  top: -10px;
}
.nav-toggle-bar::after{
  top: 10px;
}

.menu-open .nav-toggle-bar{
  transform: rotate(135deg);
  background-color: white;
}

.menu-open .nav-toggle-circle {
  background-color: #284B63;
}

.menu-open .nav-toggle-bar::before, .menu-open .nav-toggle-bar::after{
  transform: rotate(90deg);
  background-color: white;
  top: 0;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-100vw);
  transition: all .4s;
  z-index: 1;
  font-weight: bold;
  background-color: #F5EDE7;
  @media screen and (min-width: 800px) {
    transform: none;
    position: initial;
    background-color: transparent;
  }
}

.menu-open .menu{
  transform: translateX(0);
}

.menu-open, .menu-open body{
  overflow: hidden;
}

.menu ul {
  list-style: none;
  padding: 0;
  font-size: 1.875rem;
  margin: 60px 0 0;
  @media screen and (min-width: 800px){
    font-size: 1.2vw;
    display: flex;
    flex-direction: row;
    margin: 0 150px 0 0;
  }
}

.menu li{
  margin-bottom: 30px;
  text-align: center;
  padding-bottom: 10px;
  @media screen and (min-width: 800px) {
    padding-bottom: 0;
    margin-right: 80px;
    padding-top: 5px;
    margin-bottom: 5px;
    border-left: white 2px solid;
    padding-left: 50px;
  }
}

.menu a{
  color: #284B63;
  text-decoration: none;
  font-weight: bold;
  @media screen and (min-width: 800px) {
    color: white;
  }
}

.menu-open .menu li{
  transform: translateX(0);
  opacity: 1;
}

.menu img{
  width: 4em;
  height: auto;
  display: block;
  position: absolute;
  top: 80px;
  @media screen and (min-width: 800px){
    width: 4vw;
    position: initial;
    margin: 10px auto 10px 10px;
  }
}

.menu > ul > li > a {
  font-family: Raleway, sans-serif;
}

.menu .icones-menu {
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
}

.menu .ubfc {
  width: 10.875rem;
  height: auto;
  border-bottom: #284B63 1px solid;
  padding-bottom: 20px;
  @media screen and (min-width: 800px) {
    display: none;
  }
}
</style>
