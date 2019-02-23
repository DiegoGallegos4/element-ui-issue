import routes from '~/common/routes'
import { errorResponse } from '~/common/utils.js'
import { Notification } from 'element-ui'

export const mutations = {
  update(state, payload) {
    state.frm = {
      ...state.frm,
      [payload.field]: payload.value
    }
  },
  updateCollection(state, collection) {
    state.collection = collection
  },
  loading(state, loading) {
    state.loading = loading
  }
}

export const actions = {
  async fetch({ commit }) {
    try {
      const resp = await this.$axios.get(routes.categories)
      commit('updateCollection', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Categories', err.response))
    }
  },
  async submit({ commit, state }) {
    commit('loading', true)
    try {
      await this.$axios.post(routes.categories, state.frm)
      commit('loading', false)
      this.$router.push('/admin')
    } catch (err) {
      commit('loading', false)
      commit('error', err.response.data.message)
      Notification.error(errorResponse('Categories', err.response))
    }

    return Promise.resolve()
  }
}

export const state = () => ({
  collection: [],
  frm: {
    name: null
  },
  loading: false
})
