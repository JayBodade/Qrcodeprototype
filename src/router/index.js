import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import FirstScanner from '../views/FirstScanner.vue';
import SecondScanner from '../views/SecondScanner.vue';
import ThirdScanner from '../views/ThirdScanner.vue';
// import FourthScanner from '../views/FourthScanner.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: FirstScanner
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/second',
    name:'SecondScanner',
    component:SecondScanner,

  },
  {
    path:'/third',
    name:"ThirdScanner",
    component:ThirdScanner,
  
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
