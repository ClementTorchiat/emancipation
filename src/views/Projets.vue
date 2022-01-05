<template>
  <main>
    <img src="@/assets/icones/projets.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">NOS PROJETS</h1>
    <div id="projets-1">
      <p>Voici les différents projets réalisés dans le cadre du proje émancipation.</p>
      <div class="flex-3">
        <div v-for="posts in liste" :key="posts.id">
          <img :src="posts.better_featured_image.source_url" alt="Projet">
          <h3>{{posts.title.rendered}}</h3>
          <p>{{posts.content.rendered | liveSubstr(200)}}</p>
          <a :href="posts.link" class="voir-plus">Voir le projet</a>
        </div>
      </div>
      <router-link to="Projets" class="savoir-plus">Voir tous les projets</router-link>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
import param from '@/param/param.js';
import heading from '@/components/heading.vue';

export default {
  name: 'Projets',
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
    axios.get(param.host + 'posts').then((response) => {
      console.log("Reponse", response);
      this.liste = response.data;
    })
      .catch((error) => console.log(error));
  },
};
</script>
