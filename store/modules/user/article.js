import api from '~/plugins/API'
const state = () => ({
  articles: [],
})

const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  }
}
const actions = {
  async actionGetArticles({ commit }, { token }) {
    return await api.getAllArticles({ token }).then((res) => {
      res.status === 200 ? commit('SET_ARTICLES', res.data.data) : console.log(res)
    })
  }
}
const getters = {
  getterGetAllArticles: (state) => {

  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
