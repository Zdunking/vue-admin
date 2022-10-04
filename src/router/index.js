import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login/Login'
import Loyout from '../views/Manager/Layout/index'
import Home from '../views/Manager/Home/index'


//异步
const ArticleList = () => import('../views/Manager/ArticleManager/index')
const UserManager = () => import('../views/Manager/UserManager/index')
const OrderManager = () => import('../views/Manager/ArticleManager/index')
const PersonalCenter = () => import('../views/Manager/PersonalCenter/index')

//子级路由
const ArticleAdd = () => import('../views/Manager/ArticleManager/ArticleAdd')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Loyout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        }, {
          path: '/articleList',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/ArticleAdd',
          name: 'AddArticle',
          component: ArticleAdd
        },
        {
          path: '/ordermanager',
          name: 'Home',
          component: OrderManager
        }, {
          path: '/usermanager',
          name: 'UserManager',
          component: UserManager
        }, {
          path: '/personalcenter',
          name: 'personalcenter',
          component: PersonalCenter
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
