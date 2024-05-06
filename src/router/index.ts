import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'carte',
      component: () => import('../views/LaCarte.vue')
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import('../views/LesMenus.vue')
    },
    {
      path: '/suggestion/:id',
      name: 'suggestion',
      component: () => import('../views/SuggestionChef.vue'),
    },
  ]
})

export default router
