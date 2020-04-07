import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../components/HelloWorld.vue'
import Test from '../components/contrast.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
