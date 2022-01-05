<template>
  <main>
    <img src="@/assets/icones/logo-emancipation-2.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">PROFIL</h1>
    <div class="non-disponible">
      <div class="flex">
        <div class="gauche">
          <img src="@/assets/icones/logo-emancipation.svg" alt="UBFC">
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
