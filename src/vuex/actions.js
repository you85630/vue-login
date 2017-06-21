import axios from 'axios'
export default {
  // 获取数据
  tablelist ({ commit }, res) {
    axios.get('https://www.easy-mock.com/mock/59439d588ac26d795f1a82e9/data/demodata')
      .then(function (res) {
        commit('tableList', res.data)
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
  },
  // 登录
  logIn ({ commit }, res) {
    axios.get('https://www.easy-mock.com/mock/59439d588ac26d795f1a82e9/data/user')
      .then(function (res) {
        commit('logIn', res.data)
      })
  },
  // 退出
  logOut ({ commit }) {
    commit('logOut')
  },
  // 获取页面信息
  userlogin ({commit}) {
    commit('userLogin')
  }
}
