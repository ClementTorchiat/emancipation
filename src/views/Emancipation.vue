<template>
  <main>
    <img src="@/assets/img/logo-ubfc2.png" alt="image_header" class="icones-header">
    <h1 class="titre-header">Abécédaire</h1>
    <div id="emancipation-1">
      <div class="flex">
        <div class="gauche">
          <img src="@/assets/icones/logo-emancipation.svg" alt="Emancipation">
        </div>
        <div class="droite">
          <h2>POTHEM LLC</h2>
          <p>Emancipation, Transmissions, Héritages</p>
          <a class="savoir-plus">Voir l'abécédaire</a>
        </div>
      </div>
      <h2>PROJET ÉMANCIPATION</h2>
      <p>Ce projet de recherche fédère les 5 laboratoires de recherche du pôle Langues Lettres et communication de l’UBFC et rassemble notamment des chercheur·e·s en langues, littératures et civilisations étrangères, en lettres modernes et classiques, en littérature, en arts, en psychologie, en linguistique ou communication.<br>
        Il vise à interroger la notion d’émancipation, concept largement sollicité sans toujours être précisément défini, en utilisant les compétences propres à chaque laboratoire dans une démarche interdisciplinaire.<br>
        Quatre volets ont ainsi été définis :<br>
        - un volet sur le concept d’émancipation lui-même : définitions, contours, domaines d’application<br>
        - un volet sur les archives : valorisation d’archives existantes et constitution d’archives<br>
        - un volet sur la création et le partage (transmission/diffusion/médiation) des savoirs : sollicitation d’outils existants, création d’outils et réflexion sur les méthodologies utilisées<br>
        - un volet sur la recherche/création : sollicitation d’artistes, organisation d’ateliers d’écriture créative, et ouverture sur la société civile.<br>
        Le projet sera lancé le 29 septembre 2021 avec une manifestation scientifique ouverte au public, « Hétérotopies : espaces d’émancipation ? », qui se tiendra à Besançon et sera simultanément retransmise à Dijon et à Montbéliard.</p>
      <img src="@/assets/img/amphi_head-3.png" alt="Amphi">
      <p>Pour le blog …
        Selon certains dictionnaires l’émancipation, c’est  l’action d’affranchir ou de s’affranchir  « d’une entrave, d’un état de dépendance, d’une domination » (Larousse). « d’une autorité, de servitudes ou de préjugés. » (Le Robert).
        Nous accueillons toutes vos contributions sur le thème de l’émancipation : créations personnelles, poèmes ou textes, ou images que vous souhaitez partager avec nous. Si vous choisissez cette dernière solution, merci d’introduire le document par quelques mots expliquant votre choix. Sentez-vous le besoin d’émancipation ou l’avez-vous ressenti à un moment de votre vie ? Diriez-vous qu’aujourd’hui vous vous êtes émancipé.e … de … de quoi au fond ? Quels sont les obstacles à l’émancipation, qu’est-ce qui la favorise ? Qu’est-ce qui vous relie ou relie le texte à l’émancipation ou à votre conception de l’émancipation ?</p>
    </div>
    <div id="emancipation-2">
      <h2>PRODUCTIONS</h2>
      <div class="flex">
        <div v-for="posts in liste" :key="posts.id">
          <img :src="posts.better_featured_image.source_url" alt="Projet">
          <h3>{{posts.title.rendered}}</h3>
          <p>{{posts.content.rendered | liveSubstr(200)}}</p>
          <a :href="posts.link" class="voir-plus">Voir le projet</a>
        </div>
      </div>
    </div>
    <div id="emancipation-3">
      <h2>ÉVÈNEMENTS</h2>
      <div class="flex">
        <div class="gauche">
          <img src="@/assets/img/exemple-emancipation.png" alt="Emancipation">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
          <a class="savoir-plus">Découvrir</a>
        </div>
        <div class="milieu">
          <img src="@/assets/img/exemple-emancipation.png" alt="Emancipation">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
          <a class="savoir-plus">Découvrir</a>
        </div>
        <div class="droite">
          <img src="@/assets/img/exemple-emancipation.png" alt="Emancipation">
          <h3>Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
          <a class="savoir-plus">Découvrir</a>
        </div>
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

<style scoped lang="less">
@import "/src/assets/less/pages.less";
</style>
