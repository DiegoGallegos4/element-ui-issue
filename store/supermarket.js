import routes from '~/common/routes'
import { errorResponse } from '~/common/utils'
import { Notification } from 'element-ui'

export const mutations = {
  loading(state, loading) {
    state.loading = loading
  },
  setForm(state, frm) {
    state.frm = frm
  },
  update(state, payload) {
    state.frm = {
      ...state.frm,
      [payload.field]: payload.value
    }
  },
  updateCollection(state, collection) {
    state.collection = collection
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
  async fetchRecord({ commit }, id) {
    commit('loading', true)
    try {
      const resp = await this.$axios.get(`${routes.supermarkets}/${id}`)
      commit('setForm', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Edit Supermarket', err.response))
    }
    commit('loading', false)
  },
  async submit({ commit, state }) {
    const form = new FormData()
    const headers = { 'Content-Type': 'multipart/form-data' }
    Object.keys(state.frm).map(key => form.append(key, state.frm[key]))

    commit('loading', true)
    try {
      if (state.frm.id) {
        await this.$axios.put(`${routes.supermarkets}/${state.frm.id}`, form, {
          headers
        })
      } else {
        await this.$axios.post(routes.supermarkets, form, { headers })
      }
      this.$router.push('/admin')
    } catch (err) {
      Notification.error(errorResponse('Supermarkets', err.response))
    }
    commit('loading', false)
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
