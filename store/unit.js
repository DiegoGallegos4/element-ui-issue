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
      const resp = await this.$axios.get(routes.units)
      commit('updateCollection', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Units', err.response))
    }
  },
  async submit({ commit, state }) {
    commit('loading', true)
    try {
      await this.$axios.post(routes.units, state.frm)
      commit('loading', false)
      this.$router.push('/admin')
    } catch (err) {
      commit('loading', false)
      Notification.error(errorResponse('Units', err.response))
    }

    return Promise.resolve()
  }
}

export const state = () => ({
  collection: [],
  frm: {
    name: null,
    abbr: null
  },
  loading: false
})
