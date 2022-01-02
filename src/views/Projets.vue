<template>
  <main>
    <heading></heading>
    <div id="projets-1">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      <div class="flex">
        <div v-for="article in liste" :key="article.id">
          <img :src="article.featured_media" alt="Projet">
          <h3>{{ article.title }}</h3>
          <p>{{ article.excerpt }}</p>
          <a class="voir-plus">Voir le projet</a>
        </div>
      </div>
      <a class="savoir-plus">Voir tous les projets</a>
    </div>
  </main>
</template>

<script>
/* eslint-disable */
import param from '@/param/param.js';
import heading from '@/components/heading.vue';

export default {
  name: 'Projets',
  components: { heading },
  computed: {
    getMetaData() {
      return this.$route.meta.data;
    }
  },
  data() {
    return {
      liste: [],
    };
  },
  created() {
    axios.get(param.host + 'article').then((response) => {
      console.log("Reponse", response);
      this.liste = response.data;
    })
      .catch((error) => console.log(error));
  },
};
</script>
