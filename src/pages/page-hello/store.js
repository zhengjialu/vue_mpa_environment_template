import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// store 状态管理
const store = new Vuex.Store({
  state: {
    helloContent: 'xxxx',
  },
  mutations: {
    increment(state) {
      state.helloContent = 'hello'
    },
  },
})

export default store
