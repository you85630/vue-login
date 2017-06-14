export default {
  // 列表页
  tablelist (state) {
    if (state.key !== '') {
      return state.tablelist.filter(function (item) {
        return item.name.indexOf(state.key) > -1
      })
    }
    return state.tablelist
  },
  addlist (state) {
    return state.addlist
  },
  activelist (state) {
    return state.activelist
  },
  // 添加列表
  listlabel (state) {
    return state.listlabel
  },
  labellist (state) {
    return state.labellist
  },
  // 图表数据
  charts (state) {
    return state.charts
  },
  charts1 (state) {
    return state.charts1
  }
}
