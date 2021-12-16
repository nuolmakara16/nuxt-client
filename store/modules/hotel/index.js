
const state = () => ({
  hotels: []
})

const mutations = {
  SET_HOTEL(state, payload) {
    state.hotels = payload
  }
}

const actions = {
  actionAddHotel({ commit }, { payload }) {
    commit('ADD_HOTEL', payload)
  },
  async actionGetHotels({ commit }) {
    const url = 'http://localhost:8000/hotels'
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    await this.$axios.$get(url, config).then((res) => {
      commit('SET_HOTEL', res)
      return res
    })
  }
}
const getters = {
  getHotels: (state) => {
    return state.hotels
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}
