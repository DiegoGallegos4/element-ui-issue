import routes from '~/common/routes'
import { errorResponse } from '~/common/utils'
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
      const resp = await this.$axios.get(routes.supermarkets)
      commit('updateCollection', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Supermarkets', err.response))
    }
  },
  async submit({ commit, state }) {
    const form = new FormData()
    const headers = { 'Content-Type': 'multipart/form-data' }

    Object.keys(state.frm).map(key => form.append(key, state.frm[key]))
    commit('loading', true)

    try {
      await this.$axios.post(routes.supermarkets, form, { headers })
      commit('loading', false)
      this.$router.push('/admin')
    } catch (err) {
      commit('loading', false)
      Notification.error(errorResponse('Supermarkets', err.response))
    }

    return Promise.resolve()
  }
}

export const state = () => ({
  collection: [],
  frm: {
    name: null,
    country: 'HN',
    logo: null
  },
  loading: false
})
