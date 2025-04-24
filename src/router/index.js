import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import notFoundView from '@/views/notFoundView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"home",
      component:HomeView
    },
    {
      path : '/:catchAll(.*)',
      name : 'not-found',
      component : notFoundView
  }
  ],
})

export default router
