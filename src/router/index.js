import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeMain',
      component: ()=> import('../views/Frontend/HomeMain.vue'),
      children:[{
        path:'/',
        name: 'home',
        component: ()=> import('../views/Frontend/HomeView.vue')
      },
    ]
    },
    {
      path:'/employer-login',
      name:'employerLogin',
      component: ()=> import('../views/Backend/LoginView.vue'),
    }
  ]
})

export default router
