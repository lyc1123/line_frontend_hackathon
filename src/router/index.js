import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookKeeping from '../views/BookKeeping.vue'
import Search from '../views/Search.vue'
import Map from '../views/Map.vue'
import CreateAlbum from '../views/Create.vue'
import UpdateAlbum from '../views/finally.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bookkeeping',
    name: 'BookKeeping',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BookKeeping
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Search
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/createalbum',
    name: 'CreateAlbum',
    component: CreateAlbum
  },
  {
    path: '/updatealbum',
    name: 'UpdateAlbum',
    component: UpdateAlbum
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
