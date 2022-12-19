import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '../views/Frontend/HomeMain.vue'
import HomeView from '../views/Frontend/HomeView.vue'
import EmpLoginView from '../views/Backend/Employer/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeMain',
      component: HomeMain,
      children:[{
        path:'/',
        name: 'home',
        component: HomeView
      },
    ]
    },
    {
      path:'/employer-login',
      name:'employerLogin',
      component: EmpLoginView,
    }
  ]
})

export default router
