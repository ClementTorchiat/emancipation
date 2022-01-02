<template>
  <main>
    <heading></heading>
    <div id="actualités-1">
      <div class="flex">
        <div class="gauche">
          <a href=""><img src="@/assets/icones/logo-emancipation.svg" alt="émancipation"></a>
        </div>
        <div class="droite">
          <h2>Projet Émancipation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed orci massa, elementum nec arcu id, venenatis pulvinar nunc. Donec tellus risus, consectetur ac ipsum ac, sollicitudin varius felis. Nam in lacinia nisl. Vestibulum dictum, est eu ullamcorper vehicula, diam sapien aliquet magna, non ultricies enim turpis sed odio. Morbi ut nulla pretium, scelerisque nisi eu, molestie tortor. Integer ut felis eu dolor mattis aliquam vel ut dolor. Suspendisse at nibh lobortis, tincidunt lorem ut, ultricies tellus.</p>
          <a href="" class="voir-plus">En savoir plus</a>
        </div>
      </div>
    </div>
    <div id="actualités-2">
      <h2>Réseaux Sociaux</h2>
      <img class="logo-twitter" src="@/assets/icones/logo-twitter.svg" alt="Twitter">
      <div class="tweets">
        <div>
          <h3>@Pothem_LLC</h3>
          <p>Il y a deux heures</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed orci massa, elementum nec arcu id, venenatis pulvinar nunc. Donec tellus risus, consectetur ac ipsum ac, sollicitudin varius felis. Nam in lacinia nisl. Vestibulum dictum, est eu ullamcorper vehicula, diam sapien aliquet magna, non </p>
        </div>
        <div>
          <h3>@UBFC</h3>
          <p>Il y a cinq heures</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed orci massa, elementum nec arcu id, venenatis pulvinar nunc.</p>
        </div>
      </div>
      <img class="logo-insta" src="@/assets/icones/logo-instagram.svg" alt="Instagram">
      <div class="flex">
        <div>
          <img src="@/assets/img/post-insta-1.png" alt="Conférence">
          <h3>@Pothem_LLC</h3>
          <p>Lorem ipsum dolor sit amet, consectetur #1adipiscing #lit #Vestibulum #faucibus</p>
        </div>
        <div>
          <img src="@/assets/img/post-insta-2.png" alt="Conférence">
          <h3>@Pothem_LLC</h3>
          <p>Lorem ipsum dolor sit amet, consectetur #1adipiscing #lit #Vestibulum #faucibus</p>
        </div>
        <div>
          <img src="@/assets/img/post-insta-3.png" alt="Conférence">
          <h3>@Pothem_LLC</h3>
          <p>Lorem ipsum dolor sit amet, consectetur #1adipiscing #lit #Vestibulum #faucibus</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
import heading from '@/components/heading.vue';

export default {
  name: 'Actualites',
  components: { heading },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  }
}

</script>

<style scoped lang="less">
@import "/src/assets/less/pages.less";

</style>
