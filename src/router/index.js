import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoryView from '../views/CategoryView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import UserView from '../views/UserView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/category',
    name: 'Category',
    component: CategoryView
  },

  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },

  {
    path: '/post',
    name: 'Post',
    component: PostView
  },

  {
    path: '/user',
    name: 'User',
    component: UserView
  }
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
