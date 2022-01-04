<template>
  <main>
    <img src="@/assets/icones/conferences.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">NOS CONFÉRENCES</h1>
    <div class="non-disponible">
      <div class="flex">
        <div class="gauche">
          <img src="@/assets/img/logo-ubfc2.png" alt="UBFC">
        </div>
        <div class="droite">
          <h2>Fonctionnalité non disponible</h2>
          <p>Revenez plus tard !</p>
          <router-link to="Accueil" class="voir-plus">Retourner à l'accueil</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Profil',
};
</script>

<style scoped>

</style>
