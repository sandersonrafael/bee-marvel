import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./views/Home.vue') },
  { path: '/characters', name: 'characters', component: () => import('./views/Characters.vue') },
  { path: '/comics', name: 'comics', component: () => import('./views/Comics.vue') },
  { path: '/events', name: 'events', component: () => import('./views/Events.vue') },
  { path: '/contact', name: 'contact', component: () => import('./views/Contact.vue') },
  { path: '/:pathMatch(.*)*', name: 'Page404', component: () => import('./views/Page404.vue') },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

export default router;
