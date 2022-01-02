<template>
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
    <img src="@/assets/img/fondheader2.png" alt="fond" class="fond-accueil">
    <div class="header-accueil-container">
      <img src="@/assets/img/logo-ubfc2.png" alt="logo" id="icone-ubfc-accueil">
      <h1 id="titre-accueil">POTHEM</h1>
      <p>Pôle Thématique langues lettres et communications</p>
      <img src="@/assets/icones/fleche-bas.svg" alt="flèche" id="flèche-bas">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
  header {
    margin-bottom: -3.5vw;
    @media screen and (min-width: 800px) {
      margin-bottom: -16.3vw;
    }
    .nav-toggle {
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
      .nav-toggle-bar {
        content: "";
        background-color: white;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        transition: all .4s ease-in-out;
        &::before {
          content: "";
          background-color: white;
          width: 100%;
          height: 2px;
          position: absolute;
          left: 0;
          transition: all .4s ease-in-out;
        }
        &::after {
          content: "";
          background-color: white;
          width: 100%;
          height: 2px;
          position: absolute;
          left: 0;
          transition: all .4s ease-in-out;
        }
      }
    }
    .menu {
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
      ul {
        list-style: none;
        padding: 0;
        font-size: 1.875rem;
        margin: 60px 0 0;
        @media screen and (min-width: 800px) {
          font-size: 1.2vw;
          display: flex;
          flex-direction: row;
          margin: 0 3vw 0 0;
        }
        li {
          margin-bottom: 30px;
          text-align: center;
          padding-bottom: 10px;
          @media screen and (min-width: 800px) {
            padding-bottom: 0;
            margin-right: 2vw;
            padding-top: 0.3vw;
            margin-bottom: 0.3vw;
            border-left: white 0.1vw solid;
            padding-left: 2vw;
          }
          &:first-child {
            border-left: none;
          }
          a {
            color: #284B63;
            text-decoration: none;
            font-weight: bold;
            font-family: Raleway, sans-serif;
            @media screen and (min-width: 800px) {
              color: white;
            }
          }
        }
      }
      img {
        width: 4em;
        height: auto;
        display: block;
        position: absolute;
        top: 80px;
        @media screen and (min-width: 800px) {
          width: 3vw;
          position: initial;
          margin: 0.65vw auto 0.65vw auto;
        }
        &:first-child {
          @media screen and (min-width: 800px) {
            padding-right: 2vw;
          }
        }
      }
      .icones-menu {
        display: none;
        @media screen and (min-width: 800px) {
          display: block;
        }
      }
      .ubfc {
        width: 10.875rem;
        height: auto;
        border-bottom: #284B63 1px solid;
        padding-bottom: 20px;
        @media screen and (min-width: 800px) {
          display: none;
        }
      }
    }
    .fond-accueil {
      width: 340vw;
      height: auto;
      transform: translate(-2.5vw, -2.5vw);
      @media screen and (min-width: 800px) {
        width: 101vw;
        height: 100%;
        position: relative;
        transform: translate(-1vw, -16vw);
        z-index: -10;
      }
    }
    .header-accueil-container {
      width: 327px;
      height: auto;
      margin: auto;
      #icone-ubfc-accueil {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -25%);
        @media screen and (min-width: 800px) {
          width: 14vw;
          height: auto;
          top: 10vw;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      #titre-accueil {
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        border-bottom: white 2px solid;
        padding: 0 30px 20px;
        @media screen and (min-width: 800px) {
          font-size: 2vw;
          top: 25vw;
          left: 50%;
          transform: translateX(-50%);
          padding-bottom: 1.3vw;
          position: absolute;
        }
      }
      p {
        font-family: Raleway SemiBold, sans-serif;
        color: white;
        font-size: 1.438rem;
        position: absolute;
        text-align: center;
        width: 327px;
        height: auto;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -60%);
        @media screen and (min-width: 800px) {
          width: 900px;
          height: auto;
          font-size: 1.5vw;
          top: 30vw;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
      }
      #flèche-bas {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, 80%);
        @media screen and (min-width: 800px) {
          width: 4vw;
          height: auto;
          top: 40vw;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
      }
    }
  }
</style>
