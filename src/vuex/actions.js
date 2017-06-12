export default {
  // 计算器
  add ({ commit }) {
    commit('getAdd')
  },
  remove ({ commit }) {
    commit('getRemove')
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
  prevlist ({commit}, index) {
    commit('prevList', index)
  }
}
