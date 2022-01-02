import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from '@/views/Accueil.vue';
import Information from '@/views/Information.vue';
import Actualites from '@/views/Actualites.vue';
import Projets from '@/views/Projets.vue';
import Conferences from '@/views/Conferences.vue';
import Emancipation from '@/views/Emancipation.vue';

Vue.use(VueRouter);
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: {
      data: {
        headingImage: '@/assets/img/logo-ubfc2.png',
        headingTitle: 'POTHEM',
      }
    }
  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
    meta: {
      data: {
        headingImage: '@/assets/icones/informations.svg',
        headingTitle: 'QUI SOMMES-NOUS ?',
      }
    }
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites,
    meta: {
      data: {
        headingImage: '@/assets/icones/actualites.svg',
        headingTitle: 'NOS ACTUALITÉS',
      }
    }
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
    meta: {
      data: {
        headingImage: '@/assets/icones/projets.svg',
        headingTitle: 'NOS PROJETS',
      }
    }
  },
  {
    path: '/conferences',
    name: 'Conferences',
    component: Conferences,
  },
  {
    path: '/emancipation',
    name: 'Emancipation',
    component: Emancipation,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
