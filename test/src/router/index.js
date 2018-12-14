import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Map from '../pages/Map/Map';
Vue.use(Router)

export default new Router({
  routes: [
    {  path: '/',redirect:'/home'}, //重定向
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
