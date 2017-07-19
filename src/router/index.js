import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const NotFound = resolve => require(['components/pages/notfound'], resolve)
const Login = resolve => require(['components/pages/login'], resolve)
const Index = resolve => require(['components/pages/index'], resolve)
const List = resolve => require(['components/pages/list'], resolve)
const Edit = resolve => require(['components/pages/edit'], resolve)
const Chart = resolve => require(['components/pages/chart'], resolve)

const router = new Router({
  routes: [
    {
      path: '*',
      name: '404',
      component: NotFound
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/list',
      name: 'user',
      component: List,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/list/edit/:editId',
      name: 'edit',
      component: Edit,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/chart',
      name: 'chart',
      component: Chart,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  let login = sessionStorage.getItem('login')
  if (to.meta.requireAuth) {
    if (!login) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
