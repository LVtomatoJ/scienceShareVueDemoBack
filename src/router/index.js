import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home_id',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
    children: [
      {
        path: '1',
        component:() => import(/* webpackChunkName: "about" */ '../views/home/Index.vue'),
      },
      {
        path: '2',
        component:  () => import(/* webpackChunkName: "about" */ '../views/home/Knowlist.vue'),
      },
      {
        path: '3',
        component:  () => import(/* webpackChunkName: "about" */ '../views/home/Knowhome.vue'),
      },
      {
        path: '4',
        component:  () => import(/* webpackChunkName: "about" */ '../views/home/Need.vue'),
      },
    ],
  },{
    path:'/article',
    name:"Article",
    component:() => import(/* webpackChunkName: "about" */ '../views/article/Page.vue'),
  },
  {
    path:'/login',
    name:"Login",
    component:() => import(/* webpackChunkName: "about" */ '../views/login/Login.vue'),
  },
  {
    path:'/reg',
    name:"Reg",
    component:() => import(/* webpackChunkName: "about" */ '../views/login/Register.vue'),
  },
  {
    path:'*',
    name:'any',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
    children: [
      {
        path: '*',
        component:() => import(/* webpackChunkName: "about" */ '../views/home/Index.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router
