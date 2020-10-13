const store = {
  namespaced: true, //命名空间
  state: () => ({
    //state里面存放的是变量，如果你要注册全局变量，写这里
    loadingTips: '加载中' // 全局路由loading加载提示
  }),
  getters: {
    getLoginData: state => {
      return state.loginData
    }
  },
  mutations: {
    //修改store中的变量的方法，如果你要改变变量的值，就写这
    SetDeviceType(state, deviceType) {
      state.deviceType = deviceType
    }
  },
  actions: {},
  modules: {}
}

export default store
