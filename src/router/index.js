import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login/Login'
import Loyout from '../views/Layout/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Loyout,
      children: [

      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
