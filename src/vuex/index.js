import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutation'
import actions from './actions'
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
