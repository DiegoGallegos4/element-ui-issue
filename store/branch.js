import routes from '~/common/routes'
import { errorResponse } from '~/common/utils.js'
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
      const resp = await this.$axios.get(routes.branches)
      commit('updateCollection', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Branches', err.response))
    }
  },
  async fetchRecord({ commit }, id) {
    commit('loading', true)
    try {
      const resp = await this.$axios.get(`${routes.branches}/${id}`)
      commit('setForm', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Edit Branches', err.response))
    }
    commit('loading', false)
  },
  async submit({ commit, state }) {
    commit('loading', true)
    try {
      if (state.frm.id) {
        await this.$axios.put(`${routes.branches}/${state.frm.id}`, state.frm)
      } else {
        await this.$axios.post(routes.branches, state.frm)
      }
      this.$router.push('/admin')
    } catch (err) {
      Notification.error(errorResponse('Branches', err.response))
    }
    commit('loading', false)

    return Promise.resolve()
  }
}

export const state = () => ({
  collection: [],
  frm: {
    supermarket: '',
    address: null,
    city: null,
    location: {
      type: 'Point',
      coordinates: [15.520638660195933, -88.02657544612886]
    },
    phone_number: null,
    opening: null,
    closing: null
  },
  loading: false
})
