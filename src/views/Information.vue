<template>
  <main>
    <heading></heading>
    <div id="informations-1">
      <h2>POTHEM LLC</h2>
      <div class="flex">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
        <img src="@/assets/icones/logo-pothem.svg" alt="POTHEM">
      </div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
      <a class="voir-plus">Voir plus</a>
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
          <p>Chef du département</p>
          <div class="flex-2">
            <a><img src="@/assets/icones/linkedin.svg" alt="LinkedIn"></a>
            <a><img src="@/assets/icones/mail.svg" alt="Mail"></a>
          </div>
        </div>
        <div>
          <img src="@/assets/img/alain-lamboux-durand.jpg" alt="Alain Lamboux-Durand">
          <h3>Alain Lamboux-Durand</h3>
          <p>Chef du département</p>
          <div class="flex-2">
            <a><img src="@/assets/icones/linkedin.svg" alt="LinkedIn"></a>
            <a><img src="@/assets/icones/mail.svg" alt="Mail"></a>
          </div>
        </div>
        <div>
          <img src="@/assets/img/alain-lamboux-durand.jpg" alt="Alain Lamboux-Durand">
          <h3>Alain Lamboux-Durand</h3>
          <p>Chef du département</p>
          <div class="flex-2">
            <a><img src="@/assets/icones/linkedin.svg" alt="LinkedIn"></a>
            <a><img src="@/assets/icones/mail.svg" alt="Mail"></a>
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
