<template>
  <main>
    <img src="@/assets/icones/actualites.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">NOTRE ACTUALITÉ</h1>
    <div id="actualités-1">
      <div class="flex">
        <div class="gauche">
          <router-link to="Emancipation" tag="a"><img src="@/assets/icones/logo-emancipation.svg" alt="émancipation"></router-link>
        </div>
        <div class="droite">
          <h2>Projet Émancipation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id faucibus mi. Sed orci massa, elementum nec arcu id, venenatis pulvinar nunc. Donec tellus risus, consectetur ac ipsum ac, sollicitudin varius felis. Nam in lacinia nisl. Vestibulum dictum, est eu ullamcorper vehicula, diam sapien aliquet magna, non ultricies enim turpis sed odio. Morbi ut nulla pretium, scelerisque nisi eu, molestie tortor. Integer ut felis eu dolor mattis aliquam vel ut dolor. Suspendisse at nibh lobortis, tincidunt lorem ut, ultricies tellus.</p>
          <router-link to="Emancipation" class="voir-plus">En savoir plus</router-link>
        </div>
      </div>
    </div>
    <div id="actualités-2">
      <div class="flex-3">
        <div v-for="actualites in liste" :key="actualites.id">
          <img :src="actualites.better_featured_image.source_url" alt="Projet">
          <h3>{{actualites.title.rendered}}</h3>
          <p>{{actualites.content.rendered | liveSubstr(200)}}</p>
          <a onclick="window.open(this.href); return false;" :href="actualites.link" class="voir-plus">Voir le projet</a>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */
import heading from '@/components/heading.vue';
import param from '@/param/param.js';

export default {
  name: 'Actualites',
  data() {
    return {
      liste: [],
    };
  },
  filters: {
    liveSubstr: function (string, nb) {
      return string.substring(4,nb) + '...';
    },
    liveDate: function (string, nb) {
      return string.substring(0,nb);
    }
  },
  created() {
    axios.get(param.host + 'actualites').then((response) => {
      console.log("Reponse", response);
      this.liste = response.data;
    })
      .catch((error) => console.log(error));
  },
}

</script>

<style scoped lang="less">
@import "/src/assets/less/pages.less";

</style>
