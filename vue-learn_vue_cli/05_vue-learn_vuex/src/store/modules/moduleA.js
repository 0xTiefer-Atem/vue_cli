export default {
  state: {
    name: 'asd'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    update(context) {
      //这里的commit只管自己module里的mutations里的方法
      context.commit('updateName', 'wangwu');
    }
  },
  getters: {
    fullName(state) {
      return state.name + '12qwr'
    },

    //在模块中引用根state里的数据,传入参数rootState
    fullName1(state, getters, rootState) {
      return state.name + rootState.counter
    }
  }
}
