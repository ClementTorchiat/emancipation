<template>
  <main>
    <img src="@/assets/icones/informations.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">QUI SOMMES-NOUS ?</h1>
    <div id="informations-1">
      <h2>POTHEM LLC</h2>
      <div class="flex">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
        <img src="@/assets/icones/logo-pothem.svg" alt="POTHEM">
      </div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
      <router-link to="Emancipation" class="voir-plus">Voir plus</router-link>
    </div>
    <div id="informations-2">
      <div id="informations-2-titre">
        <img src="@/assets/icones/equipe.svg" alt="Équipe">
        <h2>NOTRE ÉQUIPE</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
      </div>
      <div id="equipe" class="flex">
        <div>
          <img src="@/assets/img/alain-lamboux-durand.jpg" alt="Alain Lamboux-Durand">
          <h3>Alain Lamboux-Durand</h3>
          <p>Chef du département MMI</p>
          <div class="flex-2">
            <a href="https://www.linkedin.com/in/alain-lamboux-durand-719b0b181/"><img src="@/assets/icones/linkedin.svg" alt="LinkedIn"></a>
            <a href="mailto:alain.lamboux-durand@univ-fcomte.fr"><img src="@/assets/icones/mail.svg" alt="Mail"></a>
          </div>
        </div>
        <div>
          <img src="@/assets/img/sylvie-crinquand.jpg" alt="Alain Lamboux-Durand">
          <h3>Sylvie Crinquand</h3>
          <p>Professeure de littérature anglaise</p>
          <div class="flex-2">
            <a href="https://www.linkedin.com/in/sylvie-crinquand-3584807b/?originalSubdomain=fr"><img src="@/assets/icones/linkedin.svg" alt="LinkedIn"></a>
            <a href="mailto:sylvie.crinquand@u-bourgogne.fr"><img src="@/assets/icones/mail.svg" alt="Mail"></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
import heading from '@/components/heading.vue';

export default {
  name: 'information',
  components: { heading },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}

</script>

<style scoped lang="less">
  @import "/src/assets/less/styles.less";
  @import "/src/assets/less/pages.less";
</style>
