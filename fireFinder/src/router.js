import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/auta',
    name: 'Auta',
    component: () => import('./views/Auta.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
