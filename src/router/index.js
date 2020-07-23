import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import User from '../views/User.vue'
import FirstChild from '../views/user/FirstChild.vue'
import SecondChild from '../views/user/SecondChild.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [{
      path: 'first',
      name: 'first',
      component: FirstChild
    },
    {
      path: 'second',
      name: 'second',
      component: SecondChild
    
    }
  ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
