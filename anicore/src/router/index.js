import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AllAnimePage from '@/pages/AllAnimePage.vue';
import AnimePage from '@/pages/AnimePage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/all-anime', component: AllAnimePage },
  { path: '/anime/:id', component: AnimePage },
  { path: '/profile', component: ProfilePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
