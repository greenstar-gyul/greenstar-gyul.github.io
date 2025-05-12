import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlgorithmView from '../views/AlgorithmView.vue'
import WebDevView from '../views/WebDevView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PostView from '@/views/PostView.vue'
import DatabaseView from '@/views/DatabaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { 
      path: '/algorithm/:type', // 알고리즘
      component: AlgorithmView 
    },        
    { 
      path: '/webdev/:type', // Web Dev
      component: WebDevView 
    },           
    { 
      path: '/db/:type', // Web Dev
      component: DatabaseView 
    },           
    { 
      path: '/portfolio/:id', // 포폴
      component: PortfolioView 
    },        
    { 
      path: '/:pathMatch(.*)*', // NotFound fallback
      redirect: '/' 
    },
    { 
      path: '/post/:type/:id', // NotFound fallback
      component: PostView
    }                  
  ],
})

export default router
