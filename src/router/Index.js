import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AllAnime from '../views/AllAnime.vue';
import AnimeDetail from '../views/AnimeDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/all-anime', name: 'AllAnime', component: AllAnime },
  { path: '/anime/:id', name: 'AnimeDetail', component: AnimeDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;