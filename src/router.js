import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Lunch from './components/meal/lunch.vue'
import Breakfast from './components/meal/breakfast.vue'
import Dinner from './components/meal/dinner.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children:[
            {
                path:'/lunch',
                name:'lunch',
                component:Lunch
            },
            {
                path:'/dinner',
                name:'dinner',
                component:Dinner
            },
            {
                path:'/',
                name:'breakfast',
                component:Breakfast
            },
            {
                path:'/breakfast',
                name:'breakfast',
                component:Breakfast
            },
        ]
    },
  ]
})
