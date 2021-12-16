import Vuex from 'vuex'
import hotelStore from './modules/hotel'
const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      hotels: hotelStore,
    },
    state: {},
    mutations: {},
    getters: {},
    actions: {},
  })
}

export default createStore
