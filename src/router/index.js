import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import ExperienceDetails from '../views/ExperienceDetails.vue'
import NotFound from '../views/NotFound.vue'
import store from '@/store.js'
import User from "../views/User.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Invoices from "../views/Invoices.vue"


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/destination/:id',
    name: 'destination',
    props: true,
    component: Destination,
    // children: [
    //     {
    //       path: ':experienceId',
    //       name: 'experienceDetails',
    //       props: true,
    //       component: ExperienceDetails
    //     }
    // ],
    beforeEnter: (to, from, next)=>{
      const exists = store.destinations.find(destination => destination.slug === to.params.id)
      if(exists){
        next()
      }else{
        next({name:"notFound"})
      }
    }
  },
  {
    path: '/destination/:id/:experienceId',
    name: 'experienceDetails',
    props: true,
    component: ExperienceDetails
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    meta: {requiresAuth: true}
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: Invoices,
    meta: {requiresAuth: true}
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: '/404',
    alias:'/*',
    name: 'notFound',
    component: NotFound
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
   scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }

        return false;
      }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //needs to login
    if(!store.user){
      next({name:"login",  query: {redirect: to.fullPath}})
    }else{
      next()
    }
  }else{
    next() 
  }
})

export default router
