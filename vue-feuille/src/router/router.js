import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/',
    name: 'home',
    component: () => import('@/components/DashBoard.vue')
  },
  {
    path: '/home',
    alias: '/home',
    name: 'home',
    component: () => import('@/components/DashBoard.vue')
  },
  {
    path: '/register',
    alias: '/register',
    name: 'register',
    component: () => import('@/components/Register.vue')
  },
  {
    path: '/login',
    alias: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/profile',
    alias: '/profile',
    name: 'profile',
    component: () => import('@/components/Profile.vue')
  },
  {
    path: '/admin',
    alias: '/admin',
    name: 'admin',
    component: () => import('@/components/BoardAdmin.vue')
  },
  {
    path: '/user',
    alias: '/user',
    name: 'user',
    component: () => import('@/components/BoardUser.vue')
  },
  {
    path: '/sheetsForm',
    alias: '/sheetsForm',
    name: 'sheetsForm',
    component: () => import('@/components/SheetCreation.vue')
  },
  {
    path: '/sheetsList',
    alias: '/sheetsList',
    name: 'sheetsList',
    component: () => import('@/components/SheetList.vue')
  },
  {
    path: '/sheet/:id',
    alias: '/sheet/:id',
    name: 'sheet',
    component: () => import('@/components/Sheet.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
