import router from 'router/index'
export default {
  // 获取数据
  tableList (state, res) {
    state.tablelist = res.tablist
    state.charts = res.charts
    state.charts1 = res.charts1
  },
  // 列表
  delList (state, index) {
    state.tablelist.splice(index, 1)
  },
  editList (state, index) {
    router.push({ name: 'edit', params: { editId: index }, query: { page: index } })
    state.activelist = state.tablelist[index]
  },
  // 修改列表
  saveList (state, index) {
    router.go(-1)
    state.tablelist[index] = state.activelist
  },
  prevList (state) {
    router.go(-1)
  },
  // 添加列表
  pushList (state) {
    state.listlabel = true
  },
  closeLabel (state) {
    state.listlabel = false
  },
  addList (state, labellist) {
    state.tablelist.push({
      id: state.tablelist.length + 1,
      name: state.labellist.name,
      age: state.labellist.age,
      from: state.labellist.from
    })
    state.labellist.name = ''
    state.labellist.age = ''
    state.labellist.from = ''
    state.listlabel = false
  },
  // 搜索
  searchList (state, name) {
    state.key = name
  },
  // 登录
  logIn (state, res) {
    state.login.length = 0
    state.login.push({
      username: state.login.username,
      password: state.login.password
    })
    sessionStorage.setItem('login', JSON.stringify(state.login))
    sessionStorage.setItem('user', JSON.stringify(res))

    state.user = res

    state.login.username = ''
    state.login.password = ''
  },
  // 退出
  logOut (state) {
    window.sessionStorage.clear()
    location.reload()
  },
  // 获取页面信息
  userLogin (state) {
    state.user = JSON.parse(sessionStorage.getItem('user'))
  }
}
