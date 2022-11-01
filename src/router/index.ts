import { createRouter, createWebHistory } from '@ionic/vue-router';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PageSecond from '../views/Page2.vue'
import TabsPage from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Ikan/HomePage'
  },
  {
    path: '/Ikan/',
    component: TabsPage,
    children: [
  
      {
        path: '/',
        redirect: '/Ikan/HomePage'
      },
      {
        path: 'HomePage',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'Page2',
        name: 'Page2',
        component: PageSecond
      }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
