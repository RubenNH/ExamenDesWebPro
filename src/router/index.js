import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registrar',
      name: 'register',
      component: () => import('../views/registrar.vue')
    },
    {
      path: '/consultar',
      name: 'consult',
      component: () => import('../views/consultar.vue')
    }
  ]
})

export default router
