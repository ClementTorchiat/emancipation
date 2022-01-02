import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from '@/views/Accueil.vue';
import Information from '@/views/Information.vue';
import Actualites from '@/views/Actualites.vue';
import Projets from '@/views/Projets.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites,
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
