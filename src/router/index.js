import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/AddMovieView.vue')
  },
  {
    path: '/filter',
    name: 'screenMovie',
    component: () => import('../views/FilterMovieView.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/FavoritesView.vue')
  },
  {
    path: '/home/screen',
    name: 'MovieScreen',
    component: () => import('../components/Movie/MovieScreen.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
