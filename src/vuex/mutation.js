import router from 'router/index'
export default {
  // 列表
  delList (state, index) {
    state.tablelist.splice(index, 1)
  },
  editList (state, index) {
    router.push({ name: 'edit', params: { editId: index }, query: { name: index } })
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
  }
}
