import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: import('./views/Home.vue') },
  { path: '/about', name: 'about', component: import('./views/About.vue') },
  { path: '/:pathMatch(.*)*', name: 'Page404', component: import('./views/Page404.vue') },
];

const router: Router = createRouter({ history: createWebHistory(), routes });

export default router;
