import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['components/pages/notfound'], resolve)
const Login = resolve => require(['components/pages/login'], resolve)
const Index = resolve => require(['components/pages/index'], resolve)
const List = resolve => require(['components/pages/list'], resolve)
const Edit = resolve => require(['components/pages/edit'], resolve)
const Chart = resolve => require(['components/pages/chart'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFound
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/list',
      name: 'user',
      component: List
    }, {
      path: '/list/edit/:editId',
      name: 'edit',
      component: Edit
    }, {
      path: '/chart',
      name: 'chart',
      component: Chart
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
