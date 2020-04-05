import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path:'/blogs',
    name: 'blogs',
    component: Blogs,
  },
  {
    path:'/blog/:id',
    name: 'blog',
    component: Blog,
    props: true
  },
  { 
    path: '*',
    component: Home,
  },


]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
