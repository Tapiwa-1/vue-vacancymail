import { createRouter, createWebHistory } from 'vue-router'
import Nav from '../views/User/NavView.vue';
import Home from '../views/User/HomeView.vue';
import CompanyReviews from '../views/User/CompanyReviews.vue'
import Login from '../views/Auth/LoginView.vue'
import Register from '../views/Auth/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '',
          name:'Home',
          component: Home,
        },
        {
          path: 'company-reviews',
          name:'CompanyReviews',
          component: CompanyReviews
        }
      ]
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name: 'Register',
      component: Register
    },
  ]
})

export default router
