import axios from 'axios'
export default {
  // 获取数据
  tablelist ({ commit }, res) {
    axios.get('https://www.easy-mock.com/mock/593e1d4a8ac26d795fe56017/data/demodata')
      .then(function (res) {
        commit('tableList', res)
      })
  },
  // 列表页
  dellist ({ commit }, index) {
    commit('delList', index)
  },
  editlist ({ commit }, index) {
    commit('editList', index)
  },
  // 修改列表
  savelist ({ commit }, index) {
    commit('saveList', index)
  },
  prevlist ({ commit }, index) {
    commit('prevList', index)
  },
  // 添加列表
  pushlist ({ commit }, index) {
    commit('pushList', index)
  },
  closelabel ({ commit }, index) {
    commit('closeLabel', index)
  },
  addlist ({ commit }, index) {
    commit('addList', index)
  },
  // 搜索
  searchlist ({ commit }, key) {
    commit('searchList', key)
  }
}
