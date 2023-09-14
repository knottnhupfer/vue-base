import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from './layouts/AppLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'home' },
  },
  {
    name: 'ui',
    path: '/ui',
    component: AppLayout,
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('./views/Home.vue'),
      },
      {
        name: 'user',
        path: '/user',
        component: () => import('./views/User.vue'),
      },
    ],
  },
]

const router = createRouter({
//   history: createWebHistory('localhost:5173/'),
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
})

export default router
