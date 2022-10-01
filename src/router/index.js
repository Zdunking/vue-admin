import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import management from '../components/Management'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: login },
    { path: '/management', component: management }
  ]
})
