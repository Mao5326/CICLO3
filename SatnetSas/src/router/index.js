import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeV.vue'
//import servicios from '../views/servicios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/principal',
    name: 'Principal',
    component: () => import(/* webpackChunkName: "principal" */ '../views/Home.vue')
  },
  {
    path: '/ingresar',
    name: 'Ingresar',
    component: () => import(/* webpackChunkName: "ingresar" */ '../views/Ingresar.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registrar.vue')
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: () => import(/* webpackChunkName: "recuperar" */ '../views/Recuperar.vue')
  },
  {
    path: '/form',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "formulario" */ '../views/Formulario.vue')
  },
  {
      path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "formulario"  */'../views/servicios.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
