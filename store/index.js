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
    // actions: {
    //   async nuxtServerInit(store) {
    //     const token = this.$cookies.get('auth._token.laravelPassportPassword')
    //     if (token ) {
    //       try {
    //         await store.commit('SET_TOKEN', token)
    //       } catch (e) {
    //         await store.commit('LOGOUT')
    //       }
    //     } else {
    //       await store.commit('LOGOUT')
    //     }
    //   },
    // },
  })
}

export default createStore
