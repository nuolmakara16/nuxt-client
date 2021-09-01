import api from '~/plugins/API'
const state = () => ({
  roles: [],
})

const mutations = {
  SET_ROLES(state, roles) {
    state.roles = roles
  },
}

const actions = {
  async actionGetAllRoles({commit}, { token }) {
    return await api.getAllUsers({ token }).then((res) => {
      res.status === 200 ? commit('SET_ROLES', res.data.data) : console.log(res)
      return res
    })
  }
}
const getters = {
  getterGetAllRoles: (state) => {
    return state.roles
  }
}
export default {
  state,
  mutations,
  actions,
  getters,
}
