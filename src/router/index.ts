import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'salon',
      component: () => import('../views/LeSalon.vue')
    },
    {
      path: '/add',
      name: 'ajout',
      component: () => import('../views/AjoutFilm.vue')
    },
  ]
})

export default router