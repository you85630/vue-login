import router from 'router/index'
export default {
  // 获取数据
  tableList (state, res) {
    state.tablelist = res.data.tablist
    state.charts = res.data.charts
    state.charts1 = res.data.charts1
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
    sessionStorage.setItem('user', JSON.stringify(state.login))
    state.uID = res
    state.login.username = ''
    state.login.password = ''
  },
  logOut (state) {
    window.sessionStorage.removeItem('user')
    state.uID = []
  }
}
