import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from '@/views/Accueil.vue';
import Information from '@/views/Information.vue';
import Actualites from '@/views/Actualites.vue';
import Projets from '@/views/Projets.vue';
import Conferences from '@/views/Conferences.vue';
import Emancipation from '@/views/Emancipation.vue';
import Contact from '@/views/Contact.vue';
import Profil from '@/views/Profil.vue';
import MentionsLegales from '@/views/MentionsLegales.vue';
import Emancite from '@/views/Emancite.vue';

Vue.use(VueRouter);
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: {
      title: 'Bienvenue - Projet Émancipation',
    }
  },
  {
    path: '/information',
    name: 'Information',
    component: Information,
    meta: {
      title: 'Qui sommes-nous ? - Projet Émancipation',
    }
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites,
    meta: {
      title: 'Actualités - Projet Émancipation',
    }
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets,
    meta: {
      title: 'Projets - Projet Émancipation',
    }
  },
  {
    path: '/conferences',
    name: 'Conferences',
    component: Conferences,
    meta: {
      title: 'Conférences - Projet Émancipation',
    }
  },
  {
    path: '/emancipation',
    name: 'Emancipation',
    component: Emancipation,
    meta: {
      title: 'Abécédaire - Projet Émancipation',
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - Projet Émancipation',
    }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    meta: {
      title: 'Profil - Projet Émancipation',
    }
  },
  {
    path: '/mentionslegales',
    name: 'MentionsLegales',
    component: MentionsLegales,
    meta: {
      title: 'Mentions légales - Projet Émancipation',
    }
  },
  {
    path: '/emancite',
    name: 'Emancite',
    component: Emancite,
    meta: {
      title: 'Émancité - Projet Émancité',
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  })
    .forEach(tag => document.head.appendChild(tag));
  next();
});
