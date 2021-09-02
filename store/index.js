import Vuex from 'vuex'
import authStore from './modules/auth'
import userStore from './modules/admin/user'
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      auth: authStore,
      users: userStore,
    },
    state: {},
    mutations: {},
    getters: {},
    actions: {},
  })
}

export default createStore
