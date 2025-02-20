import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';  // Изменяем Home на HomePage

const routes = [
  { path: '/', name: 'Home', component: HomePage }  // Имя маршрута можно оставить "Home"
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;