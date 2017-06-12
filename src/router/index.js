import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = resolve => require(['components/pages/index/index'], resolve)
const List = resolve => require(['components/pages/List/List'], resolve)
const Edit = resolve => require(['components/pages/edit/edit'], resolve)

export default new Router({
  routes: [
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
    }
  ]
})
