const state = () => ({
  token: null,
  user: null,
  errorMsg: null,
  successMsg: null,
})
const mutations = {
  SET_ERROR_MSG(state, payload) {
    state.errorMsg = payload
  },
  SET_SUCCESS_MSG(state, payload) {
    state.successMsg = payload
  },
  SET_TOKEN(state, token) {
    state.token = token
    this.$cookies.set('token', state.token, {
      path: '/',
      maxAge: 60 * 60 * 24,
    })
  },
  SET_USER(state, user) {
    state.user = user
    this.$cookies.set('user', state.user)
  },
  LOGOUT(state) {
    state.token = null
    state.user = null
    this.$cookies.remove('token')
  },
}
const actions = {}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters,
}
