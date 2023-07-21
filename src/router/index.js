import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:filter?',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/note/:name',
      component: () => import('../views/Note.vue'),
    },
  ],
});

export default router;
