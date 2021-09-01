import api from '~/plugins/API'
const state = () => ({
  users: [],
  totalUsers: {},
})

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  },
}

const actions = {
  async actionGetAllUsers({commit}, { token }) {
    return await api.getAllUsers({ token }).then((res) => {
      res.status === 200 ? commit('SET_USERS', res.data.data) : console.log(res)
      return res
    })
  }
}
const getters = {
  getterAllUsers: (state) => {
    return state.users
  }
}
export default {
  state,
  mutations,
  actions,
  getters,
}
