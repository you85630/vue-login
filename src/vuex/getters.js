export default {
  // 列表页
  tablelist (state) {
    if (state.key !== '') {
      return state.tablelist.filter(function (item) {
        for (var key in item) {
          if (item[key] && typeof item[key] === 'string') {
            if (~item[key].indexOf(state.key.toLowerCase())) {
              return true
            }
          }
        }
      })
    } else {
      return state.tablelist
    }
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
  },
  // 登录
  login (state) {
    return state.login
  }
}
