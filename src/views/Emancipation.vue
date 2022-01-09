<template>
  <main>
    <img src="@/assets/icones/logo-emancipation-2.svg" alt="image_header" class="icones-header">
    <h1 class="titre-header">ABÉCÉDAIRE</h1>
    <div id="abecedaire">
      <p>Notre abécédaire multimédia est un concept vous permettant de vous exprimer autrement. Apparus au XV° siècle pour éduquer les enfants, les abécédaires ont une notion désuète dans l’imaginaire collectif. Cependant, nous vous permettons de donner une nouvelle vie à ce concept en ajoutant vos créations, vos inspirations sous forme de contenus multimédias.</p>
      <div v-for="abecedaire in liste" :key="abecedaire.id">
        <h2>{{abecedaire.title.rendered}}</h2>
        <p>{{abecedaire.content.rendered | liveSubstr(80)}}</p>
        <a onclick="window.open(this.href); return false;" :href="abecedaire.link" class="voir-plus">Voir le mot</a>
      </div>
    </div>
  </main>
</template>
<script>
/* eslint-disable */

import param from '@/param/param.js';

export default {
  name: 'Emancipation',
  data() {
    return {
      liste: [],
    };
  },
  filters: {
    liveSubstr: function (string, nb) {
      return string.substring(4,nb) + '...';
    },
  },
  created() {
    axios.get(param.host + 'abecedaire').then((response) => {
      console.log("Reponse", response);
      this.liste = response.data;
    })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped lang="less">
@import "/src/assets/less/pages.less";
</style>
