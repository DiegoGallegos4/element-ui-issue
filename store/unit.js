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
  },
  reset(state) {
    Object.assign(state, getDefaultState())
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
  async fetchRecord({ commit }, id) {
    commit('loading', true)
    try {
      const resp = await this.$axios.get(`${routes.units}/${id}`)
      commit('setForm', resp.data.result)
    } catch (err) {
      Notification.error(errorResponse('Edit Unit', err.response))
    }
    commit('loading', false)
  },
  async submit({ commit, state }) {
    commit('loading', true)
    try {
      if (state.frm.id) {
        await this.$axios.put(`${routes.units}/${state.frm.id}`, state.frm)
      } else {
        await this.$axios.post(routes.units, state.frm)
      }
      commit('loading', false)
      this.$router.push('/admin')
    } catch (err) {
      commit('loading', false)
      Notification.error(errorResponse('Units', err.response))
    }

    return Promise.resolve()
  },
  resetState({ commit }) {
    commit('reset')
  }
}

const getDefaultState = () => ({
  collection: [],
  frm: {
    name: null,
    abbr: null
  },
  loading: false
})

export const state = getDefaultState()
