import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookKeeping from '../views/BookKeeping.vue'
import Search from '../views/Search.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
